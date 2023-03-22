import HeroSection from '@components/page-sections/HeroSection'
import ServicesSection from '@components/page-sections/ServicesSection'
import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <HeroSection />
      <ServicesSection />
    </GeneralLayout>
  )
}

export default Home