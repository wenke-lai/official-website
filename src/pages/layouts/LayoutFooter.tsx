import { cn } from "src/utils/styles";

type LayoutFooterProps = {
  copyright: string;
};

const LayoutFooter: React.FC<LayoutFooterProps> = ({ copyright }) => {
  return (
    <footer
      className={cn(
        // Size
        "min-h-16 max-h-fit container",
        // Layout
        "row middle between md:around gap-4"
      )}
    >
      <p>{copyright}</p>
    </footer>
  );
};

export default LayoutFooter;
