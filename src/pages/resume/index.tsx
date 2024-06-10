import { useState } from "react";
import ResumeCard from "./ResumeCard";
import ResumeCardToggle from "./ResumeCardToggle";

const content = [
  {
    title: "Experience",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
  },
  {
    title: "Education",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
  },
  {
    title: "Skills",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
  },
  {
    title: "About me",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
  },
];

const Resume = () => {
  const [show, setShow] = useState(0);

  return (
    <div className="w-full">
      <hgroup>
        <h2>Resume</h2>
      </hgroup>
      <div className="grid grid-cols-1 xl:grid-cols-[auto,1fr] gap-8 p-4 md:p-16 w-full">
        <div className="w-full gap-4 xl:w-96 col sm:row xl:col">
          <ResumeCardToggle on={show === 0} onClick={() => setShow(0)}>
            Experience
          </ResumeCardToggle>

          <ResumeCardToggle on={show === 1} onClick={() => setShow(1)}>
            Education
          </ResumeCardToggle>

          <ResumeCardToggle on={show === 2} onClick={() => setShow(2)}>
            Skills
          </ResumeCardToggle>

          <ResumeCardToggle on={show === 3} onClick={() => setShow(3)}>
            About me
          </ResumeCardToggle>
        </div>

        <ResumeCard {...content[show]} />
      </div>
    </div>
  );
};

export default Resume;
