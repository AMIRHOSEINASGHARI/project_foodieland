import Badge from "@/components/shared/Badge";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="container-base relative mt-20 xl:mt-30 mb-30 rounded-[30px] overflow-hidden flex max-xl:flex-col">
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
                    <p className="font-light leading-[28px] text-sm xl:text-base text-[#00000099]">
                        Lorem ipsum dolor sit amet, consectetuipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqut enim ad minim
                    </p>
                    <div className="flex items-center gap-5">
                        <Badge icon="/icons/Timer.png" text="30 Minutes" bg />
                        <Badge icon="/icons/ForkKnife.png" text="Chicken" bg />
                    </div>
                </div>
                <div className="max-xl:mt-10 flex max-sm:flex-col justify-between gap-5">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/avatars/avatar-1.webp"
                            alt="avatar"
                            width={50}
                            height={50}
                            className="rounded-full object-cover size-[50px]"
                        />
                        <div className="flex flex-col">
                            <span className="font-bold tracking-[-2%]">
                                John Smith
                            </span>
                            <span className="text-[15px] tracking-[-2%] text-[#00000099]">
                                15 March 2022
                            </span>
                        </div>
                    </div>
                    <button className="flex items-center justify-center gap-3 py-5 px-11.5 rounded-[16px] bg-secondary">
                        <span className="text-white tracking-[-2%] text-[12px] font-semibold">
                            View Recipes
                        </span>
                        <Image
                            src="/icons/Play.png"
                            alt="play"
                            width={30}
                            height={30}
                            className="size-[20px]"
                        />
                    </button>
                </div>
            </div>
            <div className="w-full h-[500px] xl:w-1/2 xl:h-full max-xl:rounded-b-[30px] overflow-hidden">
                <Image
                    src="/hero.webp"
                    alt="hero"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="absolute max-xl:hidden top-10 left-[calc(50%-75.5px)]">
                <Image
                    src="/Badge.png"
                    alt="Badge"
                    width={200}
                    height={200}
                    className="w-[150px] h-[150px] object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
