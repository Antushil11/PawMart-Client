import React from "react";
import { useLoaderData } from "react-router";
import PetsSuppliesCard from "./PetsSuppliesCard";

const AllPetsSupplies = () => {
  const data = useLoaderData();
  console.log(data);

  const handleSearch = (e) =>{
    e.preventDefault()
    const search_text = e.target.search.value
    console.log(search_text)

  }
  return (
    <div>
      <div className="text-2xl text-center font-bold mt-10">
        Pets &amp; Supplies
      </div>

      <form onSubmit={handleSearch} className="text-center mt-10 flex gap-2 justify-center items-center">
        <label className="input rounded-full ">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input name="search" type="search" required placeholder="Search" />
        </label>
        <button className="btn btn-primary rounded-full">Search</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto my-10 ">
        {data.map((model) => (
          <PetsSuppliesCard key={model._id} model={model}></PetsSuppliesCard>
        ))}
      </div>
    </div>
  );
};

export default AllPetsSupplies;
