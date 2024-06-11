import { cn } from "src/utils/styles";

type LayoutProps = {
  className?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div className={cn("container w-full min-h-dvh grid", className)}>
      {children}
    </div>
  );
};

export default Layout;
