'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useMetaMask } from '../contexts/WalletContext';

export default function Navbar() {
  const { account, connectMetaMask } = useMetaMask();

  
  return (
      <div className='flex justify-center'>
          <div className='m-6 bg-white w-[97%] h-16 rounded-md shadow-md flex justify-between p-4'>
            <div className='flex gap-16 items-center'>
                <Link href="/" className='hover:scale-95 duration-300'>
                <Image 
                src='/moken.svg'
                alt='Moken Logo'
                width={100}
                height={100} />
                </Link>
                <Link 
                href="/rentals"
                className='font-bold hover:scale-95 duration-300'>All rentals</Link>
                <Link 
                href="/iot"
                className='font-bold hover:scale-95 duration-300'>Simulation</Link>
              </div>
              {account ? <button
                type="button"
                className="flex items-center gap-2 hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out text-black font-semibold"
                > 
                  <Image
                  src='/wallet.svg'
                  alt='Wallet Logo'
                  width={17}
                  height={17} />
                  {account.substring(0, 6) + '...' + account.substring(36, 42)} 
      </button> : <button
                type="button"
                className="flex items-center gap-2 hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out text-black font-semibold"
                onClick={connectMetaMask}>
                  <Image
                  src='/wallet.svg'
                  alt='Wallet Logo'
                  width={17}
                  height={17} />
                  Connect wallet
      </button>}
 
          </div>
      </div>

  )
}
