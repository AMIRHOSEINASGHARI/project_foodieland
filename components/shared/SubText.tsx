import { twMerge } from "tailwind-merge";

const SubText = ({
    subText,
    className,
}: {
    subText: string;
    className?: string;
}) => {
    return (
        <p
            className={twMerge(
                "font-light leading-[28px] text-sm xl:text-base text-[#00000099]",
                className
            )}
        >
            {subText}
        </p>
    );
};

export default SubText;
