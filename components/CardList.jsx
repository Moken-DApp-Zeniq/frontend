'use client'

import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardList = ({filteredRentals}) => {
  console.log({filteredRentals})

  return (
    <div className='flex flex-wrap gap-8 my-3 mx-8 '>
      {filteredRentals.map((rental) => (
        <Card
          key={rental?.id} // Make sure to set a unique key for each Card component
          type={rental?.type}
          price={rental?.price}
          address={rental?.address}
          bedrooms={rental?.bedrooms}
          size={rental?.size}
          spots={rental?.spots}
          image={rental?.image}
        />
      ))}
    </div>
  );
};

export default CardList;
