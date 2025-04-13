import { foodsList } from "@/constants";

import Heading from "@/components/shared/Heading";
import SubText from "@/components/shared/SubText";
import FoodCard from "../../shared/FoodCard";

const FoodsListSecondary = () => {
    return (
        <section className="container-base my-30 space-y-15 xl:space-y-20">
            <div className="flex max-xl:flex-col items-center xl:justify-between gap-4 max-xl:text-center">
                <Heading
                    text="Try this delicious recipe to make your day"
                    className="xl:w-[45%]"
                />
                <SubText
                    subText="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
                    className="xl:w-1/2"
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                {foodsList.slice(8).map((food) => (
                    <FoodCard key={food.id} type="secondary" {...food} />
                ))}
            </div>
        </section>
    );
};

export default FoodsListSecondary;
