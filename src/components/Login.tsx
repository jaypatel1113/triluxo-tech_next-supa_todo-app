import { useRef, useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { IoMdLogIn } from "react-icons/io";
import Image from "next/image";

import { useAuth } from "~/hooks/useAuth";

const LoginComponent: React.FC = (): React.ReactNode => {
    const { login, error } = useAuth();

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const inpRef = useRef<HTMLInputElement | null>(null);

    const updateCredentials = (key: string, value: string) => {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [key]: value,
        }));
    };

    const handleLoginClick = () => {
        setCredentials({
            email: "spectator@admin-panel.com",
            password: "viewer@login",
        });
        if(inpRef.current) inpRef.current.focus();
    }

    const handleLogin = () => void login(credentials.email, credentials.password);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            if(credentials.email && credentials.password) {
                void handleLogin();
            }
        }
    };

    return (
        <div className="flex flex-col gap-5 justify-center h-full items-center w-full relative">
            <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                    src="https://gmrguksafuopppgoodxy.supabase.co/storage/v1/object/public/portfolio-images/main-profile.webp"
                    alt="profile"
                    width={1000}
                    height={1000}
                    className={`w-[150px] h-[150px] object-cover rounded-full pointer-events-none`}
                />
                <div className="uppercase text-2xl font-bold tracking-wide">TODO APP</div>
            </div>

            <div className="flex flex-col min-w-[300px] gap-3">
                <input
                    type="email"
                    placeholder="Email"
                    className="px-2 py-1 rounded-md bg-white/10 text-sm backdrop-blur-sm outline-none border-b-2 border-[#60cdff] tracking-wide font-medium"
                    value={credentials.email}
                    onChange={(e) => updateCredentials("email", e.target.value)}
                    onKeyUp={handleKeyPress}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-2 py-1 rounded-md bg-white/10 text-sm backdrop-blur-sm outline-none border-b-2 border-[#60cdff] tracking-wide font-medium"
                    value={credentials.password}
                    onChange={(e) => updateCredentials("password", e.target.value)}
                    onKeyUp={handleKeyPress}
                    ref={inpRef}
                />
                {error && (
                    <p className="text-xs font-semibold tracking-wide text-red-500 text-center">
                        {error}
                    </p>
                )}
                {/* <Link href={"/signup"} className="text-xs font-semibold tracking-wide text-center mt-3 ">
                    don't have account?
                </Link> */}
            </div>

            
            <div className='fixed bottom-10 right-10 z-[2] flex flex-col gap-2  min-w-fit'>
                <div 
                    className='group p-3 hover:bg-white/10 text-white backdrop-blur rounded-md cursor-pointer transition-all duration-300'
                    onClick={handleLoginClick}
                >
                    <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 h-auto min-w-max opacity-0 group-hover:opacity-100 -translate-y-3 group-hover:translate-y-0 transition-all duration-200 ">
                        <div className="flex gap-1 items-center text-xs font-semibold text-white tracking-wider px-2 py-1 bg-[#1b54cd] rounded-sm">
                            Click & hit <AiOutlineEnter className="stroke-[1]" />
                        </div>
                        <div className="w-0 h-0 border-[6px] border-r-transparent border-l-transparent border-b-transparent absolute top-full left-1/2 -translate-x-1/2 border-t-[#1b54cd] " />
                    </div>
                    <div className='font-bold text-2xl tracking-wider'>
                        <IoMdLogIn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComponent;
