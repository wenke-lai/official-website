import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandThreads,
  TbDownload,
  TbMail,
} from "react-icons/tb";
import whoami from "src/assets/whoami.jpg";
import BlinkingCursor from "src/components/BlinkingCursor";
import RepeatTyping from "src/components/animation/repeat-typing";
import { Avatar, AvatarImage } from "src/components/ui/avatar";
import HeroSummary from "./HeroSummary";

const HeroInformation = () => {
  return (
    <div className="order-1 md:order-0">
      <hgroup className="gap-4 row">
        <h2>Hello, it's </h2>
        <h2 className="text-transparent scale-105 bg-gradient-to-b from-sky-300 to-blue-700 bg-clip-text">
          Wenke Lai
        </h2>
      </hgroup>
      <div className="">
        <p className="inline pr-2 text-xl md:text-2xl xl:text-3xl">I'm a</p>
        <RepeatTyping
          texts={["Cloud Engineer", "Web Developer"]}
          className="text-xl font-bold text-emerald-500 md:text-2xl xl:text-3xl"
        />
        <BlinkingCursor className="ml-1 bg-emerald-500" />
      </div>
      <p className="pt-8 text-base md:text-lg xl:text-xl">
        I excel at designing cloud architecture solutions and implementing
        monitoring and auditing systems.
      </p>
      <p className="pb-8 text-base md:text-lg xl:text-xl">
        Additionally, I am proficient in <b>Python</b> and <b>JavaScript</b>.
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
