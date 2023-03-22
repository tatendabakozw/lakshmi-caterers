import HeroSection from '@components/page-sections/HeroSection'
import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <HeroSection />
    </GeneralLayout>
  )
}

export default Home