import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      <main className='flex justify-center items-center h-screen w-screen bg-gradient'>
        <section className='flex items-center gap-20'>
          <figure>
            <img src="/public/img-perfil.jpg" alt="perfil image" className='h-96 w-96 rounded-full 
            border-3 border-[#42363687] p-2 animate-rotation'/>
          </figure>

          <div className='flex flex-col gap-5'>
            <h1 className='font-garamond text-[#423636] text-6xl'>Netherim</h1>
            <h2 className='font-fraunces text-[#423636] italic text-custom'>Find all the links to your dragon prince here</h2>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
