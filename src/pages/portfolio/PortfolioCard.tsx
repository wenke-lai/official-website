import { cn } from "src/utils/styles";

import {
  TbBrandGithubFilled,
  TbChevronLeft,
  TbChevronRight,
  TbExternalLink,
} from "react-icons/tb";

type PortfolioInfoProps = {
  id: string;
  title: string;
  description: string;
  skills: string[];
  website?: string;
  github?: string;
};

const PortfolioInfo: React.FC<PortfolioInfoProps> = ({
  id,
  title,
  description,
  skills,
  website,
  github,
}) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto,auto]">
      <hgroup className="py-4">
        <h3
          className={cn(
            "text-6xl font-black",
            "bg-gradient-to-r from-cyan-500 to-pink-500",
            "bg-clip-text text-transparent"
          )}
        >
          {id}
        </h3>
        <h3>{title}</h3>
      </hgroup>
      <p>{description}</p>
      <menu className="flex-wrap gap-4 py-4 text-sky-500 row">
        {skills.map((skill, index) => (
          <li key={index}>
            <h5>#{skill}</h5>
          </li>
        ))}
      </menu>
      <div className="gap-4 py-4 border-t-2 border-foreground/50 row middle">
        {website && (
          <a href={website}>
            <TbExternalLink />
          </a>
        )}
        {github && (
          <a href={github} className="text-3xl">
            <TbBrandGithubFilled />
          </a>
        )}
      </div>
    </div>
  );
};

type PortfolioSnapshotProps = {
  images: string[];
};

const PortfolioSnapshot: React.FC<PortfolioSnapshotProps> = ({ images }) => {
  return (
    <div className="h-full p-0 lg:p-8 grid grid-rows-[1fr,auto]">
      <div className="bg-gray-600 min-h-[512px]">
        {images.map((image, index) => (
          <img key={index} src={image} />
        ))}
      </div>
      <div className="p-4 row between middle">
        <TbChevronLeft />
        <TbChevronRight />
      </div>
    </div>
  );
};

type PortfolioCardProps = PortfolioInfoProps & PortfolioSnapshotProps;

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  title,
  description,
  skills,
  images,
  website,
  github,
}) => {
  return (
    <article className="grid grid-rows-[auto,1fr] lg:grid-cols-2 gap-4 min-h-[512px]">
      <PortfolioInfo
        id={id}
        title={title}
        description={description}
        skills={skills}
        website={website}
        github={github}
      />

      <PortfolioSnapshot images={images} />
    </article>
  );
};

export default PortfolioCard;
