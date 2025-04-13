const Heading = ({ text }: { text: string }) => {
    return (
        <h1 className="font-semibold text-[28px] xl:text-[48px] leading-[100%] tracking-[-4%]">
            {text}
        </h1>
    );
};

export default Heading;
