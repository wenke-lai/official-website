import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandThreads,
  TbDownload,
  TbMail,
} from "react-icons/tb";
import whoami from "src/assets/whoami.jpg";
import Typing from "src/components/animation/typing";
import { Avatar, AvatarImage } from "src/components/ui/avatar";
import HeroSummary from "./HeroSummary";

const HeroInformation = () => {
  return (
    <div className="order-1 md:order-0">
      <hgroup className="gap-4 row">
        <h2>Hi, I'm </h2>
        <h2 className="text-transparent scale-105 bg-gradient-to-b from-sky-300 to-blue-700 bg-clip-text">
          Wenke Lai
        </h2>
      </hgroup>
      <Typing
        label="Software Engineer"
        className="text-3xl font-bold text-emerald-600 md:text-4xl xl:text-5xl"
      />
      <p className="py-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="gap-4 py-4 text-xl row middle">
        <button className="gap-2 row middle center hover:bg-sky-500/50">
          <p className="">Download CV</p>
          <TbDownload />
        </button>
        <button className="py-2 hover:bg-sky-500/50">
          <TbBrandGithub />
        </button>
        <button className="py-2 hover:bg-sky-500/50">
          <TbBrandThreads />
        </button>
        <button className="py-2 hover:bg-sky-500/50">
          <TbBrandLinkedin />
        </button>
        <button className="py-2 hover:bg-sky-500/50">
          <TbMail />
        </button>
      </div>
    </div>
  );
};

const HeroAvatar = () => {
  return (
    <div className="order-0 md:order-1 row center md:end">
      <Avatar className="w-2/3 md:w-full xl:w-2/3">
        <AvatarImage src={whoami} alt="who am i" />
      </Avatar>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid grid-rows-[1fr,auto]">
      <div className="grid grid-cols-1 gap-0 md:gap-8 xl:gap-24 md:grid-cols-2 place-items-center">
        <HeroInformation />
        <HeroAvatar />
      </div>
      <HeroSummary />
    </div>
  );
};

export default Hero;
