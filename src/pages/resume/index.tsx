import ResumeCard from "./ResumeExperience";

const Resume = () => {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-4">
      {/* Sidebar */}
      <div>
        <h2>Resume</h2>
        <menu>
          <li>Experience</li>
          <li>Education</li>
          <li>Skills</li>
          <li>About me</li>
        </menu>
        <button>download CV</button>
      </div>

      <div>
        {/* Content */}
        <ResumeCard title="Experience" description="">
          experience
        </ResumeCard>
        <ResumeCard title="Education" description="">
          education
        </ResumeCard>
        <ResumeCard title="Skills" description="">
          skills
        </ResumeCard>
        <ResumeCard title="About me" description="">
          ME
        </ResumeCard>
      </div>
    </div>
  );
};

export default Resume;
