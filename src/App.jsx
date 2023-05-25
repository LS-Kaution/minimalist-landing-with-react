import DiscordSvg from "../public/SVG/DiscordSvg";
import TiktokSvg from "../public/SVG/TiktokSvg";
import TwitterSvg from "../public/SVG/TwitterSvg";
import TwitchSvg from "../public/SVG/TwitchSvg";
import PatreonSvg from "../public/SVG/PatreonSvg";
import ThroneSvg from "../public/SVG/ThroneSvg";
import CoachingSvg from "../public/SVG/CoachingSvg";

function App() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gradient">
      <div className="h-screen w-screen absolute z-10 invisible bg-[#DEC8B8] animate-bgColorAnimation"></div>
      <section className="flex items-center gap-16">
        <figure>
          <img
            src="/public/img-perfil.jpg"
            alt="perfil image"
            className="h-96 w-96 rounded-full
              border-3 border-[#42363687] p-2 animate-rotation"
          />
        </figure>
        <div className="flex flex-col gap-5">
          <h1 className="font-garamond text-[#423636] text-6xl mb-3 animate-slideH1">
            Netherim
          </h1>
          <h2 className="font-fraunces text-[#423636] italic text-custom animate-slideH2">
            Find all the links to your dragon prince here.
          </h2>
          <ul className="h-197 w-577 flex gap-5 mt-8 flex-wrap animate-slideButtonsY">
            <li className="animate-buttonsVisible">
              <a
                href="https://discord.com/invite/netherim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center
                  items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic
                  text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#9CA5FF] hover:border-[#9CA5FF] group"
              >
                Discord
                <DiscordSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#9CA5FF]" />
              </a>
            </li>
            <li className="animate-[buttonsVisible_2s_ease]">
              <a
                href="https://www.tiktok.com/@netherim_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#FF5C5C] hover:border-[#FF5C5C] group"
              >
                Tiktok
                <TiktokSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#FF5C5C]" />
              </a>
            </li>
            <li className="animate-[buttonsVisible_2.5s_ease]">
              <a
                href="https://twitter.com/Netherim_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#4cbde0c4] hover:border-[#4cbde0c4] group"
              >
                Twitter
                <TwitterSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#4cbde0c4]" />
              </a>
            </li>
            <li className="animate-[buttonsVisible_3s_ease]">
              <a
                href="https://www.twitch.tv/netherim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#9361FF] hover:border-[#9361FF] group"
              >
                Twitch
                <TwitchSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#9361FF]" />
              </a>
            </li>
            <li className="animate-[buttonsVisible_3.5s_ease]">
              <a
                href="https://www.patreon.com/netherim"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#FA7C34] hover:border-[#FA7C34] group"
              >
                Patreon
                <PatreonSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#FA7C34]" />
              </a>
            </li>
            <li className="animate-[buttonsVisible_4s_ease]">
              <a
                href="https://throne.com/netherim/wishlist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#5A4DF7] hover:border-[#5A4DF7] group"
              >
                Throne
                <ThroneSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#5A4DF7]" />
              </a>
            </li>
            <li className="animate-[buttonsVisible_4.5s_ease]">
              <a
                href="https://metafy.gg/@netherim/sessions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 h-14 w-40 border-3 border-[#423636] rounded-full font-fraunces text-custom font-light not-italic text-[#423636] leading-10 transition duration-300 hover:scale-110 hover:text-[#C89B3C] hover:border-[#C89B3C] group"
              >
                Coaching
                <CoachingSvg className="h-6 w-5 fill-[#423636] duration-300 group-hover:fill-[#C89B3C]" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default App;
