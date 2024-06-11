import { cn } from "src/utils/styles";

type ResumeCardToggleProps = {
  on: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const ResumeCardToggle: React.FC<ResumeCardToggleProps> = ({
  on,
  onClick,
  children,
}) => {
  return (
    <button
      className={cn("w-full rounded-md border-foreground/50 hover:opacity-50", {
        "bg-green-500": on,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ResumeCardToggle;
