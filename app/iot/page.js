"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ethers } from "ethers";
import Property from "@/abi/Property.json";

export default function BuyProperty() {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const initialize = async () => {
      const contractAddress = "0x02ba6264C19AcF92e24cAC47678690c571Ab6f2b";
      const contractABI = Property.abi;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const propertyContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      setContract(propertyContract);
    };
    initialize();
  }, []);

  const handleSimulate = async () => {

    const result = await contract.checkIn(date, address)
    console.log(result)

    setFeedback(result ? "Door unlocked!" : "Door did not unlock!");
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-around items-center px-24">
        <div className="p-12 rounded-md border border-black bg-white flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl mb-6">IoT Simulation</h1>
          <label>
            Day:
            <input
              type="text"
              className="border rounded-md ml-2 mb-2 p-1"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label>
            Address:
            <input
              className="border rounded-md ml-2 p-1"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <button
            className="mt-16 bg-black text-white font-bold w-[40vh] h-16 rounded-lg hover:scale-95 duration-300"
            onClick={handleSimulate}
          >
            Simulate
          </button>

          {feedback && <p className="mt-4">{feedback}</p>}
        </div>
        <Image
          src="/Illustration3.svg"
          alt="Illustration"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
