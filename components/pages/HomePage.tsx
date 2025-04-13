import Categories from "../templates/pages/home/Categories";
import FoodsList from "../templates/pages/home/FoodsList";
import Hero from "../templates/pages/home/Hero";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FoodsList />
        </>
    );
};

export default HomePage;
