import { useRef, useState } from "react";
import Image from "next/image";

import { useAuth } from "~/hooks/useAuth";

const SignUpComponent: React.FC = (): React.ReactNode => {
    const { error } = useAuth();

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const inpRef = useRef<HTMLInputElement | null>(null);

    const updateCredentials = (key: string, value: string) => {
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [key]: value,
        }));
    };

    // const handleSignUp = () => void signup(credentials.email, credentials.password);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            // if(credentials.email && credentials.password) {
            //     void handleSignUp();
            // }
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
                {/* <Link href={"/login"} className="text-xs font-semibold tracking-wide text-center mt-3">
                    already have account?
                </Link> */}
            </div>
        </div>
    );
};

export default SignUpComponent;
