import Pattern from '@/components/Pattern'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function BuyProperty() {
  return (
    <Pattern>
      <Navbar />
      <h1 className='m-16 font-bold text-3xl'>Comprar token de acesso a propriedade</h1>
      <div className='flex justify-between mt-16 mx-24'>
        <div>
            <div>
                <p className='font-semibold text-xl'>Data</p>
                <input type='date' className='mt-6 py-3 w-96 px-2 rounded-lg border border-black'/>
            </div>
            <div className='mt-8'>
                <p className='font-semibold text-xl'>CPF</p>
                <input type='text' className='mt-6 py-3 w-96 px-2 rounded-lg border border-black' />
            </div>
            <div className='mt-8'>
                <h1 className='text-2xl font-bold'>Valor: R$ 1.000,80</h1>
                <p>Valor referente ao montate de final dos dias selecionados</p>
            </div>
            <button className='w-96 py-4 rounded-md font-bold mt-12 bg-black text-white hover:scale-95 duration-300'>Comprar token</button>
        </div>
        <div>
            <Image
            src='/Illustration2.svg'
            alt='Illustration'
            width={850}
            height={550} />
        </div>
      </div>
      <div className='bg-black w-screen h-16 absolute bottom-0 flex justify-center'>
        <Image
        src='/mokenIcon.svg'
        alt='Moken Icon'
        width={30}
        height={30} />



      </div>
      
    </Pattern>

  )
}
