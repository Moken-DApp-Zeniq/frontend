'use client'
import React, { useEffect} from 'react';
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { useSelectedRental } from "../../contexts/rental";
import { useRouter } from "next/navigation";


export default function BuyProperty() {
  const { setSelectedRental, selectedRental } = useSelectedRental();
  const router = useRouter();

  useEffect(() => {
   if (selectedRental == null){
    console.log("selectedRental is null");
    router.push("/");
   }
    
  }, [selectedRental]);

  return (
    <div>
      <Navbar />
      <h1 className='m-16 font-bold text-3xl'>Buy property access token</h1>
      <div className='flex justify-between mt-16 mx-24'>
        <div>
            <div>
                <p className='font-semibold text-xl'>Date</p>
                <input type='date' className='mt-6 py-3 w-96 px-2 rounded-lg border border-black hover:cursor-pointer'/>
            </div>
            <div className='mt-8'>
                <p className='font-semibold text-xl'>ID</p>
                <input type='text' className='mt-6 py-3 w-96 px-2 rounded-lg border border-black' />
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl font-bold'>Price: USD {selectedRental?.price}</h1>
            </div>
            <button className='w-96 py-4 rounded-md font-bold mt-12 bg-black text-white hover:scale-95 duration-300'>Buy token</button>
        </div>
        <div>
            <Image
            src='/Illustration2.svg'
            alt='Illustration'
            width={850}
            height={550} />
        </div>
      </div>
      
    </div>

  )
}
