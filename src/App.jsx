import DiscordSvg from "../public/SVG/DiscordSvg";
import TiktokSvg from "../public/SVG/TiktokSvg";
import TwitterSvg from "../public/SVG/TwitterSvg";
import TwitchSvg from "../public/SVG/TwitchSvg";
import PatreonSvg from "../public/SVG/PatreonSvg";
import ThroneSvg from "../public/SVG/ThroneSvg";
import CoachingSvg from "../public/SVG/CoachingSvg";
import Button from "./Components/Button";

function App() {
  return (
    <main className="flex justify-center items-center h-screen w-screen bg-gradient">
      <div className="h-screen w-screen absolute z-10 invisible bg-[#DEC8B8] animate-bgColorAnimation"></div>
      <section className="flex items-center gap-16">
        <figure>
          <img
            src="/img-perfil.jpg"
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
            <Button link="https://discord.com/invite/netherim" color="discord" animation="button1">
              Discord
              <DiscordSvg />
            </Button>
            <Button link="https://www.tiktok.com/@netherim_" color="tiktok" animation="button2">
              Tiktok
              <TiktokSvg />
            </Button>
            <Button link="https://twitter.com/Netherim_" color="twitter" animation="button3">
              Twitter
              <TwitterSvg />
            </Button>
            <Button link="https://www.twitch.tv/netherim" color="twitch" animation="button4">
              Twitch
              <TwitchSvg />
            </Button>
            <Button link="https://www.patreon.com/netherim" color="patreon" animation="button5">
              Patreon
              <PatreonSvg />
            </Button>
            <Button link="https://throne.com/netherim/wishlist" color="throne" animation="button6">
              Throne
              <ThroneSvg />
            </Button>
            <Button link="https://metafy.gg/@netherim/sessions" color="coaching" animation="button7">
              Coaching
              <CoachingSvg />
            </Button>
          </ul>
        </div>
      </section>
    </main>
  );
}
export default App;