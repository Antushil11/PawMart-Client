import React, { use } from "react";
import Model from "../Model/Model";

const RecentListings = ({ recentListtingPromise }) => {
  const recent = use(recentListtingPromise);

  return (
    <div>
        <h2 className="lg:text-3xl mt-6 text-2xl font-bold text-center ">Recent Listings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  mx-auto  ">
        {recent.map((model) => (
          <Model key={model._id} model={model}></Model>
        ))}
      </div>
    </div>
  );
};

export default RecentListings;
