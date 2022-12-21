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
        <a href="/">
          <img src={logoImg} alt="" />
        </a>

        <ul className={`${navActive ? 'active' : ''} nav-list`}>
          <li>
            <a href="/precos">Preços</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="#footer">Localização</a>
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
