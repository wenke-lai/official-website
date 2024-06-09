type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="w-full min-h-dvh">{children}</div>;
};

export default Layout;
