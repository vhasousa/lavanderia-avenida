import { useState } from 'react'

import { HeaderContainer } from './styles'

import logoImg from '../../assets/logo.png'
import menuIcon from '../../assets/menu.svg'
import closeIcon from '../../assets/close.svg'

export function Header() {
  const [navActive, setNavActive] = useState(false)

  return (
    <HeaderContainer>
      <nav className={`nav`}>
        <a href="index.html">
          <img src={logoImg} alt="" />
        </a>

        <ul className={`${navActive ? 'active' : ''} nav-list`}>
          <li>
            <a href="">Preços</a>
          </li>
          <li>
            <a href="">Serviços</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
          <li>
            <a href="">Localização</a>
          </li>
        </ul>

        <div onClick={() => setNavActive(!navActive)} className={`mobile-menu`}>
          <i>
            {navActive ? (
              <img src={closeIcon} alt="" />
            ) : (
              <img src={menuIcon} alt="" />
            )}
          </i>
        </div>
      </nav>
    </HeaderContainer>
  )
}
