import './globals.css'
import React from 'react';
import { Montserrat } from 'next/font/google'
import { MetaMaskProvider } from '../contexts/WalletContext';


export const metadata = {
  title: 'Moken',
  description: 'Moken',
}

const montserrat = Montserrat({subsets: ['latin']})

export default function RootLayout({ children }) {
  return (
    <html>
      <MetaMaskProvider>
      <body className={montserrat.className}>

        <div className='bg-lightGray w-screen'>
            {children}
        </div>

      </body>
      </MetaMaskProvider>
    </html >
  )
}
