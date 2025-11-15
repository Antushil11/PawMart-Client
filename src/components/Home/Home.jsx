import Banner from "../Banner/Banner";
import CategorySection from "../../Pages/Category/CategorySection";
import RecentListings from "../../Pages/RecentListings/RecentListings";
import WhyAdopt from "../../Pages/WhyAdopt/WhyAdopt";
import PetHeroes from "../../Pages/PetHeroes/PetHeroes";

const recentListtingPromise = fetch(
  "https://pawmartserver-lemon.vercel.app/latest-models"
).then((res) => res.json());

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <CategorySection></CategorySection>
      <RecentListings
        recentListtingPromise={recentListtingPromise}
      ></RecentListings>
      <WhyAdopt></WhyAdopt>
      <PetHeroes></PetHeroes>
    </div>
  );
};

export default Home;
