import React, { use } from "react";
import Model from "../Model/Model";

const RecentListings = ({ recentListtingPromise }) => {
  const recent = use(recentListtingPromise);
  const listings = Array.isArray(recent) ? recent : [];

  return (
    <div>
      <h2 className="lg:text-3xl mt-6 text-2xl font-bold text-center ">Recent Listings</h2>
      {listings.length === 0 ? (
        <p className="text-center text-gray-500 my-8">No recent listings available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
          {listings.map((model) => (
            <Model key={model._id} model={model}></Model>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentListings;
