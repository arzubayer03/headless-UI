import React from 'react'
import Navbar from '../Navbar'
import Hero from '../Hero'
import About from '../About'
import Faq from '../Faq'
import Footer from '../Footer'
import Projects from '../Projects'
import Contact from '../contact/Contact'


function Home() {
    return (
        <>
            <div className='h-screen overflow-hidden'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Projects />
            <Faq />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
