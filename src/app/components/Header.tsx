// components/Header.tsx (or .jsx if you're not using TypeScript)
import React from "react";
import { auth } from "../firebase/config";
import SignOutButton from "./SignOutButton";
import podquestIcon from "../../../public/podquest-icon.svg";
import Image from "next/image";

const Header: React.FC = () => {
    const handleLogout = async () => {
        try {
            await auth.signOut();
            // Optionally redirect the user after logout
            // router.push('/');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <header className="bg-dark text-white p-4">
            <div className="mx-4 md:mx-16 flex justify-between items-center">
                <div className="flex gap-4">
                    <Image
                        className="w-4 h-4 md:w-8 md:h-8"
                        height={280}
                        width={280}
                        priority
                        src={podquestIcon}
                        alt=""
                    />
                    <h1 className="text-sm md:text-2xl text-highlight2">
                        PodQuest
                    </h1>
                </div>

                <SignOutButton onClick={handleLogout} />
            </div>
        </header>
    );
};

export default Header;
