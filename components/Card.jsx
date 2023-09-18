import Image from "next/image"
const Card = ({price, address, size, bedrooms, spots, type}) => {
  return (
    <div className='border rounded-md'>
        <Image src='/house'></Image>
    </div>
  )
}

export default Card