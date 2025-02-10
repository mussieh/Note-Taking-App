import { SessionProvider } from "next-auth/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SessionProvider>
            <main className="bg-customNeutral-100 w-screen h-screen flex justify-center items-center">
                {children}
            </main>
        </SessionProvider>
    );
};

export default Layout;
