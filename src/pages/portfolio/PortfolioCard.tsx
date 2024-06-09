import {
  TbBrandGithubFilled,
  TbChevronLeft,
  TbChevronRight,
  TbExternalLink,
} from "react-icons/tb";

type PortfolioCardProps = {
  title: string;
  description: string;
  skills: string[];
  images: string[];
  website?: string;
  github?: string;
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  skills,
  images,
  website,
  github,
}) => {
  return (
    <article className="grid grid-cols-2 gap-4">
      <div>
        <hgroup>
          <h3>{title}</h3>
        </hgroup>
        <p>{description}</p>
        <div>
          <menu>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </menu>
        </div>
        <hr />
        {website && (
          <a href={website}>
            <TbExternalLink />
          </a>
        )}
        {github && (
          <a href={github}>
            <TbBrandGithubFilled />
          </a>
        )}
      </div>

      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={title} />
        ))}
        <div className="row gap-8 middle">
          <TbChevronLeft />
          <TbChevronRight />
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;
