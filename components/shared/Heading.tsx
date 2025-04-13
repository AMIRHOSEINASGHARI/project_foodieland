import { twMerge } from "tailwind-merge";

const Heading = ({ text, className }: { text: string; className?: string }) => {
    return (
        <h1
            className={twMerge(
                "font-semibold text-[28px] xl:text-[48px] leading-[100%] tracking-[-4%]",
                className
            )}
        >
            {text}
        </h1>
    );
};

export default Heading;
