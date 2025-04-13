import Image from "next/image";

import { FoodCardProps } from "@/types/components.types";

import Badge from "@/components/shared/Badge";
import clsx from "clsx";

const FoodCard = ({
    category,
    image,
    imageAlt,
    isLike,
    timer,
    title,
    type,
}: FoodCardProps) => {
    return (
        <div
            className={clsx(
                "space-y-5 h-fit",
                type === "primary"
                    ? "bg-linear-0 from-primary to-primary/0 p-3 pb-6 rounded-[30px]"
                    : ""
            )}
        >
            <div className="relative">
                <div className="bg-white size-10 xl:size-12 rounded-full flex items-center justify-center absolute top-4 right-4">
                    <Image
                        src={`/icons/Heart-fill-${
                            isLike ? "red" : "white"
                        }.png`}
                        alt="like"
                        width={30}
                        height={30}
                        className="w-5"
                    />
                </div>
                <Image
                    src={image}
                    alt={imageAlt}
                    width={500}
                    height={400}
                    className="object-cover h-[250px] w-full rounded-[20px]"
                />
            </div>
            <div className="space-y-5 px-3">
                <p
                    className={clsx(
                        "font-semibold leading-[26px] tracking-[-4%] line-clamp-2",
                        type === "primary"
                            ? "text-[19px] xl:text-[21px] h-[55px]"
                            : "xl:text-[18px] h-[52px]"
                    )}
                >
                    {title}
                </p>
                <div className="flex items-center gap-5">
                    <Badge icon="/icons/Timer.png" text={timer} />
                    <Badge icon="/icons/ForkKnife.png" text={category} />
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
