import { useState } from 'react'

import './App.css'

function App() {
  return (
    <>
      <main className='flex justify-center items-center h-screen w-screen bg-gradient-to-tr from-white-bg to-blue-bg'>
        <section className='flex items-center gap-20'>
          <figure>
            <img src="/public/img-perfil.jpg" alt="perfil image" className='h-96 w-96 rounded-full border-4 border-[#42363687] p-2 animate-rotation'/>
          </figure>

          <div>
            <h1>Netherim</h1>
            <h2>Find all the links to your dragon prince here</h2>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
