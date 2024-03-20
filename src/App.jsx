import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Box } from '@chakra-ui/react'
import Hero from './components/Hero/Hero'
import MainTop from './components/MainTop/MainTop'
import Main from './components/Main/Main'
import Footer from './components/Footer'

function App() {

  return (
<Box>
<Box px={{xl:'100px', base:'10px'}}>
    <Navbar />
    <Hero />
    <MainTop />
    <Main />
     </Box>
    <Footer />
</Box>
  )
}

export default App
