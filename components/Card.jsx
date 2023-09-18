import Image from "next/image"
const Card = ({price, address, size, bedrooms, spots, type}) => {
  return (
    <div className='border rounded-md py-6 w-3/12 bg-white border-black'>
        <Image src='/house.jfif' className="w-full" width={200} height={200}></Image>
        <div className="px-4 pt-4 gap-2 flex flex-col">
            <p className="text-gray-500 text-xs">{type}</p>
            <p className="font-semibold">Starting at USD {price}/day</p>
            <p className="text-xs">{address}</p>
            <p className="text-xs">{size} m² • {bedrooms} bedrooms • {spots} parking spots</p>
        </div>
    </div>
  )
}

export default Card