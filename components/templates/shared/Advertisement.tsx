import Image from "next/image";

const Advertisement = () => {
    return (
        <div className="flex items-center justify-center h-[400px]">
            <Image
                src="/Ads.webp"
                alt="ads"
                width={500}
                height={500}
                className="w-100 h-full object-cover"
            />
        </div>
    );
};

export default Advertisement;
