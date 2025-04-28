import  React from 'react'

function PokimonCard({id,name,image,types}) {


  return (
    <div className='gap-2 hover:bg-cyan-100 border-gray-300 bg-white text-slate-800 flex-wrap flex-shrink-0 h-80 w-64 sm:w-40 md:w-48 lg:w-56 max-w-full border-2 rounded-xl p-3 flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300'>
        <h2 className='text-xl font-bold'>{name}</h2>
        <img className='rounded-md' src={image} alt="alt" />
        <p>Type: {types?.join(", ")}</p>
        <p>ID: {id}</p>

    </div>
  )
}

export default PokimonCard