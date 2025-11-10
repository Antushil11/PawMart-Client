import { MapPin } from 'lucide-react';
import React from 'react';

export const PetsSuppliesCard = ({model}) => {

    const {name, image, category, location, price, _id} = model;
    return (
        <div>
            <div className="bg-white shadow-md mt-10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover"
      />

      {/* Info */}
      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold  truncate">
          {name}
        </h2>
        <p className="text-sm ">
          Category: <span className="font-medium">{category}</span>
        </p>

        <p className="flex items-center text-sm ">
          <MapPin className="w-4 h-4 mr-1 " />
          {location}
        </p>

        <p className="text-base font-semibold ">
          {`$ ${price}`}
        </p>

        <button
          
          className="btn w-full rounded-xl md:text-[14px] md:p-4  lg:text-[16px] lg:p-6 border-gray-300  btn-sm bg-primary text-white"
        >
          See Details
        </button>
      </div>
    </div>
            
        </div>
    );
};

export default PetsSuppliesCard;