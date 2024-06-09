import { cn } from "src/utils/styles";

type LayoutContentProps = {
  children: React.ReactNode;
};

const LayoutContent: React.FC<LayoutContentProps> = ({ children }) => {
  return <main>{children}</main>;
};

type LayoutContentSectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export const LayoutContentSection: React.FC<LayoutContentSectionProps> = ({
  id,
  className = "h-fit w-full",
  children,
}) => {
  return (
    <section id={id} className={cn(className)}>
      {children}
    </section>
  );
};

export default LayoutContent;
