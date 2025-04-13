import Image from "next/image";

import Heading from "@/components/shared/Heading";
import SubText from "@/components/shared/SubText";
import CustomButton from "@/components/ui/CustomButton";

const EmailSection = () => {
    return (
        <section className="container-base">
            <div className="bg-primary rounded-[40px] sm:rounded-[60px] w-full sm:h-[442px] relative overflow-hidden flex items-center justify-center max-xl:p-8">
                <div className="flex flex-col items-center justify-center gap-7 max-w-[650px] relative z-[2]">
                    <Heading
                        text="Deliciousness to your inbox"
                        className="text-center"
                    />
                    <SubText
                        subText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
                        className="text-center"
                    />
                    <div className="bg-white rounded-[24px] p-2 sm:pl-8 flex max-sm:flex-col items-center justify-between gap-3 w-full sm:w-[400px] xl:w-[480px] mt-8">
                        <input
                            placeholder="Your email address..."
                            className="outline-none bg-transparent placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#00000066] w-full max-sm:px-5 max-sm:py-3"
                        />
                        <CustomButton
                            text="Subscribe"
                            className="sm:w-fit w-full"
                        />
                    </div>
                </div>
                <Image
                    src="/mask-left.webp"
                    alt="mask-left"
                    width={500}
                    height={500}
                    className="w-[300px] xl:w-[400px] rotate-30 absolute z-[1] -left-[150px] xl:-left-[100px] -bottom-[10%] xl:-bottom-[20%] max-md:hidden"
                />
                <Image
                    src="/mask-right.webp"
                    alt="mask-right"
                    width={500}
                    height={500}
                    className="w-[300px] xl:w-[330px] absolute z-[1] -right-20 xl:-right-0 bottom-0  max-md:hidden"
                />
            </div>
        </section>
    );
};

export default EmailSection;
