type LayoutContentProps = {
  children: React.ReactNode;
};

const LayoutContent: React.FC<LayoutContentProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default LayoutContent;
