import Image from 'next/image'
import Link from 'next/link';

export default function Navbar() {
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
                href="/outra-pagina"
                className='font-bold hover:scale-95 duration-300'>All properties</Link>
              </div>
              <button
                type="button"
                className="hover:bg-hover_grey px-4 py-2 rounded-full border-[1px] border-grey transition duration-300 ease-in-out text-black"
                // onClick={connectWallet}
                >
                {/* {isConnected ? 'Connected wallet: ' + accountAddress.substring(0, 6) + '...' + accountAddress.substring(38, 42) : 'Connect wallet'} */}
      </button>
          </div>
      </div>

  )
}
