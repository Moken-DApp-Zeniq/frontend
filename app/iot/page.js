'use client'

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function BuyProperty() {
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSimulate = async () => {
    // Convert the date to an integer representing the day of the year (0-364).
    const selectedDate = new Date(date);
    const dayOfYear = Math.floor(
      (selectedDate - new Date(selectedDate.getFullYear(), 0, 0)) / 86400000
    );

    // Call your smart contract function with date (dayOfYear) and address.
    // Replace the following line with your contract interaction code.
    // const result = await yourSmartContract.simulateUnlock(dayOfYear, address);

    // Simulate the result (replace this with actual contract interaction logic).
    const result = Math.random() < 0.5; // Simulated result (true/false).

    // Display feedback based on the result.
    setFeedback(result ? 'Door unlocked!' : 'Door did not unlock!');
  };

  return (
    <div>
      <Navbar />
      <div className='flex justify-around items-center px-24'>
        <div className='p-12 rounded-md border border-black bg-white flex flex-col justify-center items-center'>
          <h1 className='font-bold text-3xl mb-6'>IoT Simulation</h1>
          <label>
            Day: 
            <input
              type='date'
              className='border rounded-md ml-2 mb-2 p-1'
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Address: 
            <input
              className='border rounded-md ml-2 p-1'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <button
            className='mt-16 bg-black text-white font-bold w-[40vh] h-16 rounded-lg hover:scale-95 duration-300'
            onClick={handleSimulate}
          >
            Simulate
          </button>

          {feedback && <p className='mt-4'>{feedback}</p>}
        </div>
        <Image
          src='/Illustration3.svg'
          alt='Illustration'
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
