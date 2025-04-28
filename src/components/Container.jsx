import React from 'react'
import PokemonList from './PokimonList'


function Container() {
  return (
    <div className='p-5 justify-center flex-wrap h-auto gap-5 text-white flex bg-cyan-100 w-full'>
        
        <PokemonList/>
        
    </div>
  )
}

export default Container;