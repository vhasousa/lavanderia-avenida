import { HeroContainer } from './styles'

import phoneIcon from '../../../../assets/phone.svg'
import logoHero from '../../../../assets/logo_hero.png'

export function Hero() {
  return (
    <HeroContainer>
      <div className={`hero`}>
        <div>
          <h1 className={`hero__title`}>Lavanderia Avenida</h1>
          <h2 className={`hero__title--secondary`}>
            25 anos com <span>você</span>
          </h2>
          <p className={`hero__text`}>
            Uma solução completa para clientes domésticos e hotelarias de
            Valença e região
          </p>
          <div className={`hero__button`}>
            <img src={phoneIcon} alt="" />
            <a
              href="https://api.whatsapp.com/send?phone=5524988363391"
              target="_blank"
              rel="noreferrer"
            >
              Contato
            </a>
          </div>
        </div>
        <img src={logoHero} alt="" className={`hero__image`} />
      </div>
    </HeroContainer>
  )
}
