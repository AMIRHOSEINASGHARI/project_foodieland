import Image from "next/image";

import { BadgeProps } from "@/types/components.types";

import clsx from "clsx";

const Badge = ({ icon, text, bg = false }: BadgeProps) => {
    return (
        <div
            className={clsx(
                "flex items-center gap-3 w-fit",
                bg ? "bg-[#0000000D] py-2 px-3.5 rounded-full" : ""
            )}
        >
            <Image
                src={icon}
                alt={text}
                width={40}
                height={40}
                className="w-6 h-6 object-cover"
            />
            <span className="text-sm tracking-[-2%] leading-[100%] text-[#00000099]">
                {text}
            </span>
        </div>
    );
};

export default Badge;
