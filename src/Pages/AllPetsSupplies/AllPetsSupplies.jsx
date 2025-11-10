
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto my-10 ">
        {data.map(model => <PetsSuppliesCard key={model._id} model={model}></PetsSuppliesCard>)}


        
      </div>
    </div>
  );
};

export default AllPetsSupplies;
