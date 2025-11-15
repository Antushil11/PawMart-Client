import React, { useState } from "react";
import { useLoaderData } from "react-router";
import PetsSuppliesCard from "./PetsSuppliesCard";
import { AuthContext } from "../../context/AuthContext";

const AllPetsSupplies = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    console.log(search_text);
    setLoading(true);

    fetch(`https://pawmartserver-lemon.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModels(data);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="text-2xl text-center font-bold mt-10">
        Pets &amp; Supplies
      </div>

      <form
        onSubmit={handleSearch}
        className="text-center mt-10 flex gap-2 justify-center items-center"
      >
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
          <input name="search" type="search" placeholder="Search" />
        </label>
        <button className="btn btn-primary rounded-full">
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto my-10 ">
        {models.map((model) => (
          <PetsSuppliesCard key={model._id} model={model}></PetsSuppliesCard>
        ))}
      </div>
    </div>
  );
};

export default AllPetsSupplies;
