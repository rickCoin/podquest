import Image from "next/image";
import React from "react";

type ProfileImageProps = {
    photoURL?: string;
};

const ProfileImage: React.FC<ProfileImageProps> = ({ photoURL }) => {
    return (
        <div>
            {photoURL && (
                <Image
                    className="w-4 h-4 md:w-6 md:h-6"
                    height={280}
                    width={280}
                    priority
                    src={photoURL}
                    alt="Profile Picture"
                />
            )}
        </div>
    );
};

export default ProfileImage;
