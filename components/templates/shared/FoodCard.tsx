import Image from "next/image";

import { FoodCardProps } from "@/types/components.types";

import { grayBase64 } from "@/constants";

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
                <div
                    className={clsx(
                        "bg-white rounded-full flex items-center justify-center absolute",
                        type === "primary"
                            ? "size-10 xl:size-12 top-4 right-4"
                            : "size-8 xl:size-10 top-3 right-3"
                    )}
                >
                    <Image
                        src={`/icons/Heart-fill-${
                            isLike ? "red" : "white"
                        }.png`}
                        alt="like"
                        width={30}
                        height={30}
                        className={clsx(type === "primary" ? "w-5" : "w-4.5")}
                    />
                </div>
                <Image
                    src={image}
                    alt={imageAlt}
                    width={500}
                    height={400}
                    placeholder="blur"
                    blurDataURL={grayBase64}
                    className={clsx(
                        "object-cover w-full rounded-[20px]",
                        type === "primary" ? "h-[250px]" : "h-[200px]"
                    )}
                />
            </div>
            <div
                className={clsx("space-y-5", type === "primary" ? "px-3" : "")}
            >
                <p
                    className={clsx(
                        "font-semibold leading-[26px] tracking-[-4%] line-clamp-2",
                        type === "primary"
                            ? "text-[19px] xl:text-[21px]"
                            : "xl:text-[18px]"
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
