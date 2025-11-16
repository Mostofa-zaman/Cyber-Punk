import React from 'react'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import Neon from '@/components/Neon'
import Dive from '@/components/Dive'
import Footer from '@/components/Footer'
import Portal from '@/components/Portal'
import FAQ from '@/components/FAQ'
import Universe from '@/components/Universe'

const Page = () => {
  return (
  <>
     
   <main className=''>
      <Navbar /> 
     <Banner/>
     <Neon/>
     <Dive/>
     <Universe/>
     <Portal/>
     <FAQ/>
     <Footer/>
   </main>
     
  </>
      
  )
}

export default Page