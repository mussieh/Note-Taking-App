const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="bg-customNeutral-100 w-screen h-screen flex justify-center items-center">
            {children}
        </main>
    );
};

export default Layout;
