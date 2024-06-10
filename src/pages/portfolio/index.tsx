import PortfolioCard from "./PortfolioCard";

const portfolios = [
  {
    id: "01",
    title: "Cloud Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["AWS", "Python", "Pulumi"],
    images: [],
    github: "https://github.com/wenke-studio",
  },
  {
    id: "02",
    title: "Monitor System",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["Grafana", "Prometheus", "ElasticSearch"],
    images: [],
  },
  {
    id: "03",
    title: "Corporate Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: [
      "React",
      "Tailwind CSS",
      "Headless UI",
      "Zustand",
      "TanStack Query",
    ],
    images: [],
  },
  {
    id: "04",
    title: "ERP Integration Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["Python", "MSSQL & MySQL", "Audit Log", "Data Analytics"],
    images: [],
  },
];

const Portfolio: React.FC = () => {
  return (
    <div>
      <h2 className="pb-8">Portfolio</h2>

      {portfolios.map((portfolio, index) => (
        <div key={index} className="py-8">
          <PortfolioCard {...portfolio} />
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
