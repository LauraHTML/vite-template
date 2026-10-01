import React from 'react'

const Hero = ({tituloJogo, descricao}) => {
  return (
      <section className={`bg-secondary bg-cover bg-no-repeat w-full h-1/2 flex flex-row items-start px-2 py-4`}>
        <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold'>{tituloJogo}</h2>
              <p className='text-base/7 text-wrap'>{descricao}</p>
            <button>Comprar</button>
        </div>
    </section>
  )
}

export default Hero