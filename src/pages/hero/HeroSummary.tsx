import Count from "src/components/animation/count";

const summary = [
  { label: "Years of experience", value: 10 },
  { label: "Projects completed", value: 12 },
  { label: "Targets", value: 34 },
  { label: "code commits", value: 567 },
];

type HeroSummaryCardProps = {
  label: string;
  value: number;
};

const HeroSummaryCard: React.FC<HeroSummaryCardProps> = ({ label, value }) => {
  return (
    <div className="gap-2 row middle">
      <Count max={value} className="text-3xl" />
      <p>{label}</p>
    </div>
  );
};

const HeroSummary = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 min-h-32 place-items-center">
      {summary.map((item, index) => (
        <HeroSummaryCard key={index} {...item} />
      ))}
    </div>
  );
};

export default HeroSummary;
