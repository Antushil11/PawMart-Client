import React, { Suspense } from "react";
import Banner from "../Banner/Banner";
import CategorySection from "../../Pages/Category/CategorySection";
import RecentListings from "../../Pages/RecentListings/RecentListings";
import WhyAdopt from "../../Pages/WhyAdopt/WhyAdopt";
import PetHeroes from "../../Pages/PetHeroes/PetHeroes";
import { fallbackListings } from "../../data/mockData";

const recentListtingPromise = fetch(
  "https://paw-mart-server-neon.vercel.app/latest-models"
)
  .then((res) => {
    if (!res.ok) return fallbackListings;
    return res.json();
  })
  .then((data) => (Array.isArray(data) && data.length > 0 ? data : fallbackListings))
  .catch(() => fallbackListings);

const Home = () => {
  return (
    <div className="">
      <div className="mt-20">
        <Banner></Banner>
      </div>
      <CategorySection></CategorySection>
      <Suspense
        fallback={
          <div className="text-center my-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <RecentListings
          recentListtingPromise={recentListtingPromise}
        ></RecentListings>
      </Suspense>
      <WhyAdopt></WhyAdopt>
      <PetHeroes></PetHeroes>
    </div>
  );
};

export default Home;
