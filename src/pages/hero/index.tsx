import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandThreads,
  TbDownload,
  TbMail,
} from "react-icons/tb";
import whoami from "src/assets/whoami.jpg";
import { Avatar, AvatarImage } from "src/components/ui/avatar";

const HeroInformation = () => {
  return (
    <div className="order-1 md:order-0">
      <hgroup>
        <h2>Hi, I'm Wenke Lai</h2>
        <h3 className="text-green-500">Software Engineer</h3>
      </hgroup>
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
    <div className="order-0 md:order-1 row center">
      <Avatar className="w-2/3">
        <AvatarImage src={whoami} alt="who am i" />
      </Avatar>
    </div>
  );
};

const HeroSummary = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 min-h-32 place-items-center">
      <div className="gap-2 row middle">
        {/* todo: auto calculate */}
        <h3>10</h3>
        <p>Years of experience</p>
      </div>
      <div className="gap-2 row middle">
        {/* todo: GitHub API? */}
        <h3>12</h3>
        <p>Projects completed</p>
      </div>
      <div className="gap-2 row middle">
        {/* todo: GitHub API? */}
        <h3>34</h3>
        <p>Targets</p>
      </div>
      <div className="gap-2 row middle">
        {/* todo: GitHub API? */}
        <h3>567</h3>
        <p>code commits</p>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="grid grid-rows-[1fr,auto]">
      <div className="grid grid-cols-1 gap-8 md:gap-24 md:grid-cols-2 place-items-center">
        <HeroInformation />
        <HeroAvatar />
      </div>
      <HeroSummary />
    </div>
  );
};

export default Hero;
