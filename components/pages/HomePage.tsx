import Banner from "../templates/pages/home/Banner";
import Categories from "../templates/pages/home/Categories";
import FoodielandInstagram from "../templates/pages/home/FoodielandInstagram";
import FoodsList from "../templates/pages/home/FoodsList";
import Hero from "../templates/pages/home/Hero";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FoodsList />
            <Banner />
            <FoodielandInstagram />
        </>
    );
};

export default HomePage;
