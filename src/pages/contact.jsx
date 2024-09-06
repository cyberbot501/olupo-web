import React from 'react'
import Nav from '../layout/nav/nav'
import Footer from '../layout/footer/footer'
import LOCATION from '../components/contact/location'
import FORM from '../components/contact/form'

export default function contact() {
  return (
    <div>
        <Nav />
        <LOCATION />
        <FORM />
        <Footer />
    </div>
  )
}
