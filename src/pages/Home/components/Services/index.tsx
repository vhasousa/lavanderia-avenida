import { ServicesContainer } from './styles'

import carpet from '../../../../assets/carpet.svg'
import sneaker from '../../../../assets/sneaker.png'
import sofa from '../../../../assets/sofa.png'
import dress from '../../../../assets/dress.png'
import teddyBear from '../../../../assets/teddy_bear.svg'
import iron from '../../../../assets/iron.svg'

export function Services() {
  return (
    <ServicesContainer id="services">
      <h2 className={`title`}>Serviços</h2>
      <div className={`services`}>
        <article className={`services__card`}>
          <div className={`services__card`}>
            <img src={carpet} alt="" srcSet="" />
          </div>
          <p>Tapetes</p>
        </article>

        <article className={`services__card`}>
          <div className={`services__card`}>
            <img src={sneaker} alt="" srcSet="" />
          </div>
          <p>Tênis</p>
        </article>

        <article className={`services__card`}>
          <div className={`services__card`}>
            <img src={sofa} alt="" srcSet="" />
          </div>
          <p>Sofás</p>
        </article>

        <article className={`services__card`}>
          <div className={`services__card`}>
            <img src={dress} alt="" srcSet="" />
          </div>
          <p>Vestidos</p>
        </article>

        <article className={`services__card`}>
          <div className={`services__card`}>
            <img src={teddyBear} alt="" srcSet="" />
          </div>
          <p>Pelúcias</p>
        </article>

        <article className={`services__card`}>
          <div className={`services__card`}>
            <img src={iron} alt="" srcSet="" />
          </div>
          <p>Passadoria</p>
        </article>
      </div>
      <a className={`services__button`} href="precos">
        Confira nossos preços
      </a>
    </ServicesContainer>
  )
}
