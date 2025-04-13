import Image from "next/image";

import { CustomButtonProps } from "@/types/components.types";

import { twMerge } from "tailwind-merge";

const CustomButton = ({ text, icon, className = "" }: CustomButtonProps) => {
    return (
        <button
            className={twMerge(
                "flex items-center justify-center gap-3 py-5 px-11.5 rounded-[16px] bg-secondary text-white",
                className
            )}
        >
            <span className="tracking-[-2%] text-[12px] font-semibold whitespace-nowrap">
                {text}
            </span>
            {icon && (
                <Image
                    src={icon}
                    alt={text}
                    width={30}
                    height={30}
                    className="size-[20px]"
                />
            )}
        </button>
    );
};

export default CustomButton;
