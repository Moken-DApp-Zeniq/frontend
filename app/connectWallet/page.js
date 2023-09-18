import Pattern from '@/components/Pattern'
import Image from 'next/image'

export default function BuyProperty() {
  return (
    <Pattern>
        <div className='flex justify-around h-screen items-center px-24'>
            <div className='p-12 rounded-md border border-black bg-white flex flex-col justify-center items-center'>
                <h1 className='font-bold text-3xl my-8'>Welcome to Moken</h1>
                <p className='w-[50vh] mt-24 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button className='my-16 bg-black text-white font-bold w-[40vh] h-16 rounded-lg hover:scale-95 duration-300'>Conectar wallet</button>
            </div>
            <Image 
            src='/Illustration3.svg'
            alt='Illustration'
            width={500}
            height={500} /> 
        </div>
      
      
    </Pattern>

  )
}
