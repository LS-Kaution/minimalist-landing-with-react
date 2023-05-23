import discordSvg from "../public/SVG/DiscordSvg"

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
            <h1 className='font-garamond text-[#423636] text-6xl mb-3'>Netherim</h1>
            <h2 className='font-fraunces text-[#423636] italic text-custom'>Find all the links to your dragon prince here.</h2>
            <ul className='h-197 w-577 flex gap-5 mt-8 flex-wrap'>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Discord</li>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Tiktok</li>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Twitter</li>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Twitch</li>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Patreon</li>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Throne</li>
              <li className='flex justify-center items-center h-14 w-40 border-3 border-[#423636] rounded-full 
              font-fraunces text-custom font-light not-italic text-[#423636] leading-10'>Coaching</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
