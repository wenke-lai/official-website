import PortfolioCard from "./PortfolioCard";

const portfolios = [
  {
    title: "Infrastructure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["AWS", "Python", "Pulumi"],
    images: [],
    github: "https://github.com/wenke-studio",
  },
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <h2>Portfolio</h2>

      {portfolios.map((portfolio, index) => (
        <PortfolioCard key={index} {...portfolio} />
      ))}
    </div>
  );
};

export default Portfolio;
