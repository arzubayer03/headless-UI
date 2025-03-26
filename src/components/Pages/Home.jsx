import React from 'react'
import Navbar from '../Navbar'
import Hero from'../Hero'
import About from '../About'
import Faq from '../Faq'
import Footer from '../Footer'
function Home() {
    return (
        <>
        <div className='h-screen overflow-hidden'>
            <Navbar/>
            <Hero/>
        </div>
        <About/>
        <Faq/>
        <Footer/>
        </>
    )
}

export default Home
