import { cn } from "src/utils/styles";

type ResumeCardToggleProps = {
  on: boolean;
  onClick: () => void;
  label: string;
};

const ResumeCardToggle: React.FC<ResumeCardToggleProps> = ({
  on,
  onClick,
  label,
}) => {
  return (
    <button
      className={cn("w-full rounded-md border-foreground/50 hover:opacity-50", {
        "bg-green-500": on,
      })}
      onClick={onClick}
      aria-label={label}
    >
      {label}
    </button>
  );
};

export default ResumeCardToggle;
