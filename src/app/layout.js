
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./comps/Navbar"
import Footer from "./comps/Footer"
import Main from './Main'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
      <link rel="icon" href='/red_logo.png' />
      </head>
      <body className={inter.className}>
      <div className='main'>
        <Navbar/>
      <Main>{children}</Main>
      <Footer/>
        </div>
        </body>
    </html>
  )
}
