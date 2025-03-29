import React from 'react'
import Header from './Header'
import Section1 from './Section1'
import FootarComp from './FootarComp'
import Animations from './Animations'

const LandingPage = () => {
  return (
    <>
    <body className="flex font-mono min-h-[100vh] flex-col bg-[#181B20] text-white">

    <Header />
    
    <Section1/>
    <FootarComp/>
    <Animations/>
    </body>
    
    </>
  )
}

export default LandingPage