import Image from "next/image";

import { grayBase64 } from "@/constants";

import Heading from "@/components/shared/Heading";
import SubText from "@/components/shared/SubText";
import CustomButton from "@/components/ui/CustomButton";

const Banner = () => {
    return (
        <section className="container-base my-30 flex max-xl:flex-col items-center max-xl:gap-15">
            <div className="flex flex-col max-xl:items-center w-full xl:w-1/2 xl:mt-40 xl:pr-15">
                <Heading
                    text="Everyone can be a
chef in their own kitchen"
                    className="max-xl:text-center"
                />
                <SubText
                    subText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
                    className="max-xl:text-center mt-5 mb-10 xl:mb-15"
                />
                <CustomButton text="Learn More" className="w-fit" />
            </div>
            <Image
                src="/banner.webp"
                alt="banner"
                width={1000}
                height={1000}
                className="w-full sm:w-100 xl:w-[710px]"
                placeholder="blur"
                blurDataURL={grayBase64}
            />
        </section>
    );
};

export default Banner;
