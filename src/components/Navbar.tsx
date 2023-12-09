// search for font- and update fonts

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 w-full z-10 ">
            {/* advance backdrop */}
            <div className="custom-backdrop" />
            
            <div className="relative font-sans">
                <div className="flex flex-col w-full">
                    <div className="flex w-[90%] md:w-[87.5%] mx-auto py-5 justify-between items-center">
                        <div className="text-xl font-bold tracking-wide">
                            TODO APP
                        </div>
                        <div className="hidden md:flex items-center gap-7 uppercase">
                            {/* log out button */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
