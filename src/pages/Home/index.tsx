import { Contact } from './components/Contact'
import { Facilities } from './components/Facilities'
import { Hero } from './components/Hero'
import { Prices } from './components/Prices'
import { Services } from './components/Services'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Facilities />
      <Prices />
      <Services />
      <Contact />
    </HomeContainer>
  )
}
