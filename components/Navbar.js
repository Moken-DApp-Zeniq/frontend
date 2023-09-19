'use client'
import Image from 'next/image'
import Link from 'next/link';
import { useMetaMask } from '../contexts/WalletContext';

export default function Navbar() {
  const { account, connectMetaMask } = useMetaMask();

  console.log({account})
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
              </div>
              <button
                type="button"
                className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out text-black"
                >
                  {account}
      </button>
      {account ? (
        <>
          <p>Connected Account: {account}</p>
          <button>Disconnect MetaMask</button>
        </>
      ) : (
        <button onClick={connectMetaMask}>aaaa MetaMask</button>
      )}
          </div>
      </div>

  )
}
