const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className="relative w-full text-black">
            <div className="w-[90%] md:w-[87.5%] h-full mx-auto flex flex-col items-center justify-center ">
                {children}
            </div>
        </main>
    )
}

export default Layout;