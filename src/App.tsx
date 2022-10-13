import { useState } from 'react'
import './styles/global.css';

export const App = () => {
  
  return (
    <>
      <h1 className='font-bold text-2xl text-cyan-300'>Hello World!</h1>
      <button className='bg-cyan-500 font-medium px-4 py-2 rounded text-gray-400 hover:bg-violet-600 m-4'>Enviar</button>
    </>
  )
}

