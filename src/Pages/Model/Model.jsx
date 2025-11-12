import { MapPin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Model = ({model}) => {
  const { name, image, category, location, price, _id } = model;
  console.log(model);
  return (
    <div>
      <div className="bg-white shadow-md hover:scale-105 mt-10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
        <img src={image} alt={name} className="w-full h-48 object-cover" />

        <div className="p-4 space-y-2">
          <h2 className="text-lg font-semibold  truncate">{name}</h2>
          <p className="text-sm ">
            Category: <span className="font-medium">{category}</span>
          </p>

          <p className="flex items-center text-sm ">
            <MapPin className="w-4 h-4 mr-1 " />
            {location}
          </p>

          <p className="text-base font-semibold ">{`$ ${price}`}</p>

          <Link to={`/listingdetails/${_id}`} className="btn w-full rounded-xl md:text-[14px] md:p-4  lg:text-[16px] lg:p-6 border-gray-300  btn-sm bg-primary text-white">
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Model;