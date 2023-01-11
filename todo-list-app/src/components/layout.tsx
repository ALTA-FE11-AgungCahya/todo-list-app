import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen bg-gray-50  flex flex-col overflow-auto ">
      <div className="h-full overflow-auto ">{children}</div>
    </div>
  );
};

export default Layout;
