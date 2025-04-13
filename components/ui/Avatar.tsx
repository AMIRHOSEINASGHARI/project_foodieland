import Image from "next/image";

import { AvatarProps } from "@/types/components.types";

const Avatar = ({ image, name, subText, size = "md" }: AvatarProps) => {
    const gap = {
        sm: "gap-2",
        md: "gap-3",
        lg: "gap-4",
    };

    const imageSize = {
        sm: "size-[13.15px]",
        md: "size-[24.75px]",
        lg: "size-[50px]",
    };

    const nameSize = {
        sm: "text-[8px]",
        md: "text-[10px]",
        lg: "text-[16px]",
    };

    const subTextSize = {
        sm: "text-[6px]",
        md: "text-[8.5px]",
        lg: "text-[15px]",
    };

    return (
        <div className={`flex items-center ${gap[size]}`}>
            <Image
                src={image}
                alt="avatar"
                width={100}
                height={100}
                className={`rounded-full object-cover ${imageSize[size]}`}
            />
            <div className="flex flex-col">
                {name && (
                    <span
                        className={`font-bold tracking-[-2%] flex items-center gap-1 ${nameSize[size]}`}
                    >
                        {name}
                    </span>
                )}
                {subText && (
                    <span
                        className={`tracking-[-2%] text-[#00000099] ${subTextSize[size]}`}
                    >
                        {subText}
                    </span>
                )}
            </div>
        </div>
    );
};

export default Avatar;
