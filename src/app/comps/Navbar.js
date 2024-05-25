'use client'
import React from 'react'
import css from './Header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathname = usePathname()
  return (
    <header >
      <div className= {css.flexNavbar}> 
        <div><Image width={50} height={50}src='/red_logo.png'/></div>
        <div><Link className={` ${pathname === '/' ? 'active' : ''}`} href='/' >Home</Link>
        <Link className={` ${pathname === '/about' ? 'active' : ''}`} href='/about'>About</Link>
        <Link className={` ${pathname === '/users' ? 'active' : ''}`} href='/users'>Users</Link>
        <Link className={` ${pathname === '/posts' ? 'active' : ''}`} href='/posts'>Posts</Link>
        <Link className={` ${pathname === '/comments' ? 'active' : ''}`} href='/comments'>Comments</Link>
        </div></div>
    </header>
  )
}

export default Navbar
