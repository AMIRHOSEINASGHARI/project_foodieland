import Image from "next/image";

import { grayBase64 } from "@/constants";

const Advertisement = () => {
    return (
        <div className="flex items-center justify-center h-[400px]">
            <Image
                src="/Ads.webp"
                alt="ads"
                width={500}
                height={500}
                className="w-100 h-full object-cover"
                placeholder="blur"
                blurDataURL={grayBase64}
            />
        </div>
    );
};

export default Advertisement;
