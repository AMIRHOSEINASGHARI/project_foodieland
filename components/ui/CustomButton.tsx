import Image from "next/image";

import { CustomButtonProps } from "@/types/components.types";

const CustomButton = ({ text, icon }: CustomButtonProps) => {
    return (
        <button className="flex items-center justify-center gap-3 py-5 px-11.5 rounded-[16px] bg-secondary">
            <span className="text-white tracking-[-2%] text-[12px] font-semibold">
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
