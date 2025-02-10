import { ReactNode } from "react";

type LayoutProps = {
    children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return <main className="w-screen h-screen">{children}</main>;
};

export default Layout;
