"use client";
import Navbar from './common/Navbar'
import Footer from './common/Footer'

const layout = ({ children }) => {
  return (
    <div className='text-primary bg-white'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout