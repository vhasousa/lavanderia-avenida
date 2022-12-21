import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../../lib/axios'
import {
  PaginationContainer,
  SearchFormContainer,
  ServicePriceTable,
  ServicesPriceContainer,
} from './styles'
import { CaretLeft, CaretRight, MagnifyingGlass } from 'phosphor-react'
import { priceFormatter } from '../../utils/priceFormatter'

interface PriceResponseDTO {
  id: string
  description: string
  price: number
  created_at: Date
}

interface SearchFormInputs {
  search?: string
}

export function Prices() {
  const [serviceData, setServiceData] = useState<PriceResponseDTO[]>([])
  const [page, setPage] = useState(1)
  const [totalOfPages, setTotalOfPages] = useState(1)

  const { register, handleSubmit, reset } = useForm<SearchFormInputs>()

  async function fetchServices(
    data?: SearchFormInputs,
  ): Promise<PriceResponseDTO[]> {
    const response = await api.get('/services', {
      params: {
        page,
        search: data?.search,
      },
    })

    setServiceData(response.data.data)
    setTotalOfPages(response.data.total / 10)

    reset()

    return serviceData
  }

  function handleBackwardPage() {
    if (page > 1) {
      console.log('aqui')
      setPage((state) => state - 1)
    }
  }

  function handleForwardPage() {
    if (page < totalOfPages) {
      console.log(totalOfPages)
      console.log('aqui')
      setPage((state) => state + 1)
    }
  }

  useEffect(() => {
    fetchServices()
  }, [page])

  return (
    <ServicesPriceContainer>
      <SearchFormContainer onSubmit={handleSubmit(fetchServices)}>
        <input
          type="text"
          placeholder="Busque um serviço"
          {...register('search')}
        />

        <button type="submit">
          <MagnifyingGlass size={20} />
          <span>Buscar</span>
        </button>
      </SearchFormContainer>
      <ServicePriceTable>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {serviceData.map((service) => {
            return (
              <tr key={service.id}>
                <td>{service.description}</td>
                <td>{priceFormatter.format(service.price)}</td>
              </tr>
            )
          })}
        </tbody>
      </ServicePriceTable>
      <PaginationContainer>
        <div onClick={handleBackwardPage}>
          <CaretLeft size={32} />
        </div>
        <div onClick={handleForwardPage}>
          <CaretRight size={32} />
        </div>
      </PaginationContainer>
    </ServicesPriceContainer>
  )
}
