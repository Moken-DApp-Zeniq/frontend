import React from 'react'
import Card from './Card'

const CardList = () => {
  return (
    <div className='flex flex-wrap gap-8 my-3'>
        <Card type='Apartment' price={100} address={'Rua M.M.D.C, 80 - Butantã, São Paulo - SP, 05510-021'} bedrooms={3} size={330} spots={2}/>
        <Card type='Apartment' price={100} address={'Rua M.M.D.C, 80 - Butantã, São Paulo - SP, 05510-021'} bedrooms={3} size={330} spots={2}/>
        <Card type='Apartment' price={100} address={'Rua M.M.D.C, 80 - Butantã, São Paulo - SP, 05510-021'} bedrooms={3} size={330} spots={2}/>
        <Card type='Apartment' price={100} address={'Rua M.M.D.C, 80 - Butantã, São Paulo - SP, 05510-021'} bedrooms={3} size={330} spots={2}/>

    </div>
  )
}

export default CardList