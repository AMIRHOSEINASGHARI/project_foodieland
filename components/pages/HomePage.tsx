import Banner from "../templates/pages/home/Banner";
import Categories from "../templates/pages/home/Categories";
import FoodsList from "../templates/pages/home/FoodsList";
import Hero from "../templates/pages/home/Hero";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FoodsList />
            <Banner />
        </>
    );
};

export default HomePage;
