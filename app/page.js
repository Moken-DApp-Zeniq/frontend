import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='flex justify-around mx-36 my-16'>
        <Image
        src={'/Illustration.svg'}
        alt='Illustration'
        width={550}
        height={550} />

        <div className='w-[50%] flex flex-col justify-center items-center'>
          <Image
          src={'/moken.svg'}
          alt='Moken Logo'
          width={300}
          height={300} />
          <p className='text-xl w-[70%] mt-12 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div className='bg-mediumGray w-screen min-h-fit flex justify-evenly p-12'>
          <div className='w-1/2'>
            <div className='my-8 ml-12'>
              <h1 className='font-bold text-xl'>Lorem ipsum </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className='my-12 ml-12'>
              <h1 className='font-bold text-xl'>Lorem ipsum </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            
          </div>
          <div className='w-1/2 flex flex-col justify-center items-center'>
            <h1 className='font-bold text-2xl my-2'>Encontre seu imóvel</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            <button className='bg-black text-white font-bold text-xl my-8 p-6 rounded-2xl hover:scale-95 duration-300'>Ver opções diponiveis</button>
          </div>
      </div>

      
    </div>

  )
}
