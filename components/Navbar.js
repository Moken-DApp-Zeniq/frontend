import Image from 'next/image'

export default function Navbar() {
  return (
      <div className='flex justify-center'>
          <div className='m-6 bg-white w-[97%] h-16 rounded-md shadow-md flex justify-between p-4'>
            <Image 
              src='/moken.svg'
              alt='Moken Logo'
              width={100}
              height={100} />
              <button>
                <Image
                src='/header.svg'
                alt='Header'
                width={40}
                height={40} />
              </button>
          </div>
      </div>

  )
}
