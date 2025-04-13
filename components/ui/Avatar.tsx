import Image from "next/image";

import { AvatarProps } from "@/types/components.types";

const Avatar = ({ image, name, subText, size = "md" }: AvatarProps) => {
    const imageSize = {
        sm: "size-[13.15px]",
        md: "size-[24.75px]",
        lg: "size-[50px]",
    };

    return (
        <div className="flex items-center gap-4">
            <Image
                src={image}
                alt="avatar"
                width={100}
                height={100}
                className={`rounded-full object-cover ${imageSize[size]}`}
            />
            <div className="flex flex-col">
                {name && (
                    <span className="font-bold tracking-[-2%]">{name}</span>
                )}
                {subText && (
                    <span className="text-[15px] tracking-[-2%] text-[#00000099]">
                        {subText}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Avatar;
