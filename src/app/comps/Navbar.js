import React from 'react'
import css from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <header >
      <div className= {css.flexNavbar}> 
        <div><Image width={50} height={50}src='/red_logo.png'/></div>
        <div><Link href='/' >Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/rashid'>Rashid</Link>
        </div></div>
    </header>
  )
}

export default Navbar