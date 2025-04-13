import { Fragment } from "react";

import { foodsList } from "@/constants";

import Heading from "@/components/shared/Heading";
import SubText from "@/components/shared/SubText";
import FoodCard from "../../shared/FoodCard";
import Advertisement from "../../shared/Advertisement";

const FoodsList = () => {
    return (
        <section className="container-base space-y-15">
            <div className="flex flex-col items-center justify-center gap-5">
                <Heading
                    text="Simple and tasty recipes"
                    className="text-center"
                />
                <SubText
                    subText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim"
                    className="text-center max-w-[700px]"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {foodsList.slice(0, 8).map((food, index) => (
                    <Fragment key={food.id}>
                        <FoodCard type="primary" {...food} />
                        {index === 4 && <Advertisement />}
                    </Fragment>
                ))}
            </div>
        </section>
    );
};

export default FoodsList;
