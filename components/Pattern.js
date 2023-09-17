import Image from 'next/image'

export default function Pattern({ children }) {
  return (
    <body className='font-montserrat bg-lightGray w-screen'>
    {children}
    </body>
  )
}
