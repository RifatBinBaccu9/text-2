import BestSeller from "./component/bestSeller";
import DealsOfTime from "./component/DealsOfTime";
import Hero from "./component/hero";
import InstagramStories from "./component/InstagramStories";
import ProductCategories from "./component/productCategories";
import Rateing from "./component/rateing";
import Services from "./component/services";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ProductCategories />
      <BestSeller />
      <DealsOfTime />
      <Rateing />
      <InstagramStories />
      <Services />
    </div>
  );
};

export default Home;
