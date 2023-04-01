import AboutSection from '@components/page-sections/AboutSection'
import ContactSection from '@components/page-sections/ContactSection'
import GallerySection from '@components/page-sections/GallerySection'
import HeroSection from '@components/page-sections/HeroSection'
import MenuSection from '@components/page-sections/MenuSection'
import ServicesSection from '@components/page-sections/ServicesSection'
import TestimonialsSection from '@components/page-sections/TestimonialsSection'
import GeneralLayout from '@layouts/GeneralLayout'
import { ReactElement } from 'react'

type Props = {}

const Home = (props: Props):ReactElement => {
  return (
    <GeneralLayout>
      <HeroSection />
      <ServicesSection />
      <MenuSection />
      <GallerySection />
      <AboutSection/>
      <TestimonialsSection />
      <ContactSection />
    </GeneralLayout>
  )
}

export default Home