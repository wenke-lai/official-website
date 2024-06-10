import { cn } from "src/utils/styles";

type LayoutContentProps = {
  className?: string;
  children: React.ReactNode;
};

const LayoutContent: React.FC<LayoutContentProps> = ({
  className,
  children,
}) => {
  return <main className={cn(className)}>{children}</main>;
};

type LayoutContentSectionProps = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export const LayoutContentSection: React.FC<LayoutContentSectionProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <section id={id} className={cn(className)}>
      {children}
    </section>
  );
};

export default LayoutContent;
