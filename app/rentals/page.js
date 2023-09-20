'use client'

import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";
import CardList from "@/components/CardList";
import { useState, useEffect } from "react";
import Property from "@/abi/Property.json";
import { ethers } from "ethers";

export default function Rentals() {
  const [rentals, setRentals] = useState([]); // useState for storing all rental data
  const [filteredRentals, setFilteredRentals] = useState([]); // useState for storing filtered rental data
  const [searchTerm, setSearchTerm] = useState(''); // useState for storing search term
  const [contract, setContract] = useState(null);
  const [blockchainRental, setBlockchainRental] = useState(null);


  useEffect(() => {
    const initialize = async () => {
      const contractAddress = "0x02ba6264C19AcF92e24cAC47678690c571Ab6f2b";
      const contractABI = Property.abi;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      console.log('ola')
      const propertyContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      console.log({propertyContract})
      setContract(propertyContract);
    };

    const fetchRental = async () => {
      try {
        await initialize();
        // Fetch rental data from your API or data source
        const rental = await contract.property()
        console.log(rental)
        setBlockchainRental({
          id: 0, 
          price: rental[1].toString(),
          image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg',
          address: rental[5],
          type: rental[4],
          bedrooms: 4,
          size: 2500,
          spots: 2,

        })
        setRentals([
          blockchainRental,
          {
            id: 1,
            type: 'Beach House',
            price: 300,
            address: '123 Oceanfront Dr, Malibu, CA 90265',
            bedrooms: 4,
            size: 2500,
            spots: 2,
            image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg'
          },
          {
            id: 2,
            type: 'Mountain Cabin',
            price: 200,
            address: '456 Pine Tree Ln, Aspen, CO 81611',
            bedrooms: 3,
            size: 1800,
            spots: 4,
            image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg'
          },
          {
            id: 3,
            type: 'Lakefront Cottage',
            price: 150,
            address: '789 Lakeside Rd, Lake Tahoe, CA 96150',
            bedrooms: 2,
            size: 1200,
            spots: 1,
            image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg'
          },
          {
            id: 4,
            type: 'Luxury Villa',
            price: 500,
            address: '101 Luxury Way, Ibiza, Spain',
            bedrooms: 5,
            size: 4000,
            spots: 6,
            image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg'
          },
          {
            id: 5,
            type: 'Ski Chalet',
            price: 250,
            address: '321 Mountain View Dr, Whistler, BC V8E 0N7',
            bedrooms: 3,
            size: 2200,
            spots: 3,
            image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg'
          },
          {
            id: 6,
            type: 'Desert Oasis',
            price: 180,
            address: '555 Sand Dune Rd, Scottsdale, AZ 85255',
            bedrooms: 2,
            size: 1600,
            spots: 2,
            image: 'https://www.ahstatic.com/photos/1988_rokga_00_p_1024x768.jpg'
          },
        ])
    
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    };
    fetchRental()
  }, [contract]);


  // onSearch function for searching rentals
  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the search term state
    filterRentals(searchTerm); // Filter rentals based on the search term
  };

  // Function to filter rentals based on search term
  const filterRentals = (searchTerm) => {
    // Implement your search logic here to search across all fields
    const filtered = rentals.filter((rental) => {
      // Convert all fields to lowercase for case-insensitive search
      const rentalValues = Object.values(rental).map((value) =>
        typeof value === 'string' ? value.toLowerCase() : value
      );

      // Check if any field includes the searchTerm
      return rentalValues.some((value) =>
        String(value).includes(searchTerm.toLowerCase())
      );
    });

    setFilteredRentals(filtered); // Update the filteredRentals state with filtered data
  };

  // Function to reset filtered rentals and search term
  const resetFilter = () => {
    setFilteredRentals(rentals); // Show all rentals
    setSearchTerm(''); // Clear the search term
  };

  return (
    <div>
      <Navbar />
      <div className="px-6">
        <span className="flex justify-between items-center">
          <h1 className="mx-8 my-4 font-bold text-3xl pb-8">All rentals</h1>
          <SearchField onSearch={onSearch} onBlur={resetFilter} />
        </span>
        <CardList filteredRentals={searchTerm ? filteredRentals : rentals} />
      </div>
    </div>
  );
}
