import Image from "next/image";

import { categories } from "@/constants";

import Heading from "@/components/shared/Heading";
import CustomButton from "@/components/ui/CustomButton";

const Categories = () => {
    return (
        <section className="container-base my-25 xl:my-30 space-y-25">
            <div className="flex items-center justify-between">
                <Heading text="Categories" />
                <CustomButton
                    text="View All Categories"
                    className="bg-primary text-black px-6"
                />
            </div>
            <div className="flex items-center justify-between flex-wrap gap-8 gap-y-20">
                {categories.map(({ bgColorFrom, bgColorTo, image, text }) => (
                    <div
                        key={text}
                        className="relative shrink-0 xl:w-[180px] w-[150px] h-[120px] xl:h-[135px] rounded-[30px] flex flex-col justify-end"
                        style={{
                            background: `linear-gradient(to top, ${bgColorFrom}, ${bgColorTo})`,
                        }}
                    >
                        <div className="absolute -top-[50px] left-[calc(50%-40px)] xl:left-[calc(50%-50px)]">
                            <Image
                                src={image}
                                alt={text}
                                width={150}
                                height={150}
                                className="xl:w-[100px] w-[80px] relative z-[2]"
                            />
                            <Image
                                src={image}
                                alt={text}
                                width={150}
                                height={150}
                                className="xl:w-[100px] w-[80px] blur-[20px] opacity-30 absolute z-[1] top-5 left-5"
                            />
                        </div>
                        <span className="text-center font-semibold mb-6">
                            {text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
