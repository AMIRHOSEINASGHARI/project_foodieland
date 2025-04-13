import Banner from "../templates/pages/home/Banner";
import Categories from "../templates/pages/home/Categories";
import EmailSection from "../templates/pages/home/EmailSection";
import FoodielandInstagram from "../templates/pages/home/FoodielandInstagram";
import FoodsList from "../templates/pages/home/FoodsList";
import FoodsListSecondary from "../templates/pages/home/FoodsListSecondary";
import Hero from "../templates/pages/home/Hero";

const HomePage = () => {
    return (
        <>
            <Hero />
            <Categories />
            <FoodsList />
            <Banner />
            <FoodielandInstagram />
            <FoodsListSecondary />
            <EmailSection />
        </>
    );
};

export default HomePage;
