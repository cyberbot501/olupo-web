import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/landing/hero'
import About from '../components/landing/about'
import Product from '../components/landing/product'
import Farming from '../components/landing/farming'
import Blog from '../components/landing/blog'
import Footer from '../layout/footer/footer'

export default function landing() {
  return (
    <div>
        <Nav />
        <Hero />
        <About />
        <Product />
        <Farming />
        <Blog />
        <Footer />
    </div>
  )
}
