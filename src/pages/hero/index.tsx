import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandThreads,
  TbFileTypePdf,
  TbMail,
} from "react-icons/tb";
import whoami from "src/assets/whoami.jpg";
import { Avatar, AvatarImage } from "src/components/ui/avatar";

const Hero = () => {
  return (
    <div>
      <h2>Hi, I'm Wenke Lai</h2>
      <h3>Software Engineer</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Avatar className="h-16 w-16">
        <AvatarImage src={whoami} alt="who am i" />
      </Avatar>
      <div className="row middle gap-4">
        <button className="row middle center gap-2 border rounded-md">
          <p>Download CV</p>
          <TbFileTypePdf />
        </button>
        <TbBrandGithub />
        <TbBrandThreads />
        <TbBrandLinkedin />
        <TbMail />
      </div>
      <div>
        <div className="row middle gap-2">
          {/* todo: auto calculate */}
          <h6>10</h6>
          <p>Years of experience</p>
        </div>
        <div className="row middle gap-2">
          {/* todo: GitHub API? */}
          <h6>7</h6>
          <p>Projects completed</p>
        </div>
        <div className="row middle gap-2">
          {/* todo: GitHub API? */}
          <h6>987</h6>
          <p>code commits</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
