import React from 'react'
import Contact from '../components/Contact'
import CopyRight from '../components/CopyRight'
import Navbar from '../components/Navbar'

const ContactPage = () => {
  return (
    <div style={{backgroundColor:"#845ec2"}}>
      <Navbar />
      <Contact />
      <CopyRight />
    </div>
  )
}

export default ContactPage