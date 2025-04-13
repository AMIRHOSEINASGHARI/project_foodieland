import Image from "next/image";

import { grayBase64 } from "@/constants";

import Badge from "@/components/shared/Badge";
import CustomButton from "@/components/ui/CustomButton";
import Avatar from "@/components/ui/Avatar";
import SubText from "@/components/shared/SubText";

const Hero = () => {
    return (
        <section className="container-base relative mt-20 xl:mt-30 rounded-[30px] overflow-hidden flex max-xl:flex-col">
            <div className="bg-primary max-xl:rounded-t-[30px] flex flex-col justify-between gap-5 xl:gap-8 p-6 xl:px-10 xl:py-12 w-full xl:w-1/2">
                <div className="space-y-5 xl:space-y-8">
                    <div className="flex items-center justify-center gap-2 rounded-full w-[156px] h-[45px] bg-white shadow-[10px_20px_40px_#2940461A]">
                        <Image
                            src="/paper.png"
                            alt="paper"
                            width={24}
                            height={24}
                        />
                        <span className="text-sm font-semibold">
                            Hot Recipes
                        </span>
                    </div>
                    <h1 className="text-[40px] xl:text-[64px] font-semibold leading-[100%] tracking-[-4%]">
                        Spicy delicious chicken wings
                    </h1>
                    <SubText
                        subText="Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim"
                    />
                    <div className="flex items-center gap-5">
                        <Badge icon="/icons/Timer.png" text="30 Minutes" bg />
                        <Badge icon="/icons/ForkKnife.png" text="Chicken" bg />
                    </div>
                </div>
                <div className="max-xl:mt-10 flex max-sm:flex-col justify-between gap-5">
                    <Avatar
                        image="/avatars/avatar-1.webp"
                        name="John Smith"
                        subText="15 March 2022"
                        size="lg"
                    />
                    <CustomButton text="View Recipes" icon="/icons/Play.png" />
                </div>
            </div>
            <div className="w-full h-[500px] xl:w-1/2 xl:h-full max-xl:rounded-b-[30px] overflow-hidden">
                <Image
                    src="/hero.webp"
                    alt="hero"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                    placeholder="blur"
                    blurDataURL={grayBase64}
                />
            </div>
            <div className="absolute max-xl:hidden top-10 left-[calc(50%-75.5px)]">
                <Image
                    src="/Badge.png"
                    alt="Badge"
                    width={300}
                    height={300}
                    className="w-[150px] h-[150px] object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
