'use client'

import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = () => {
  const [rentals, setRentals] = useState([]); // useState for storing rental data

  // useEffect for fetching rental data
  useEffect(() => {
    const fetchRentals = async () => {
      try {
        // Fetch rental data from your API or data source
        const response = await fetch('your_api_endpoint_here');
        if (response.ok) {
          const data = await response.json();
          setRentals(data); // Update the rentals state with fetched data
        } else {
          console.error('Failed to fetch rentals');
        }
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    };

    fetchRentals(); // Call the fetchRentals function when the component mounts
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // onSearch function for searching rentals
  const onSearch = (searchTerm) => {
    // Implement your search logic here to search across all fields
    const filteredRentals = rentals.filter((rental) => {
      // Convert all fields to lowercase for case-insensitive search
      const rentalValues = Object.values(rental).map((value) =>
        typeof value === 'string' ? value.toLowerCase() : value
      );
  
      // Check if any field includes the searchTerm
      return rentalValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    });
  
    setRentals(filteredRentals); // Update the rentals state with filtered data
  };

  return (
    <div className='flex flex-wrap gap-8 my-3'>
      {rentals.map((rental) => (
        <Card
          key={rental.id} // Make sure to set a unique key for each Card component
          type={rental.type}
          price={rental.price}
          address={rental.address}
          bedrooms={rental.bedrooms}
          size={rental.size}
          spots={rental.spots}
        />
      ))}
    </div>
  );
};

export default CardList;
