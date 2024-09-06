import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/landing/hero'
import About from '../components/landing/about'

export default function landing() {
  return (
    <div>
        <Nav />
        <Hero />
        <About />
    </div>
  )
}
