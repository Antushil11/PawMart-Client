
import React from "react";
import { useLoaderData } from "react-router";
import PetsSuppliesCard from "./PetsSuppliesCard";

const AllPetsSupplies = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <div className="text-2xl text-center font-bold mt-10">
        
        Pets &amp; Supplies
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map(model => <PetsSuppliesCard key={model._id} model={model}></PetsSuppliesCard>)}


        
      </div>
    </div>
  );
};

export default AllPetsSupplies;
