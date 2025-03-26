import React from 'react'
import Navbar from '../Navbar'
import Hero from'../Hero'
import About from '../About'
function Home() {
    return (
        <>
        <div className='h-screen overflow-hidden'>
            <Navbar/>
            <Hero/>
        </div>
        <About/>
        <h1></h1>
        </>
    )
}

export default Home
