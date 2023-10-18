const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="flex flex-col items-center justify-center bg-black text-white">
            {children}
        </main>
    )
}

export default Layout;