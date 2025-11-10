import React from "react";
import { useNavigate } from "react-router";

const categories = [
  {
    name: "Pets (Adoption)",
    image: "https://i.ibb.co/dgdRm0m/pets-category.jpg",
    route: "Pets",
  },
  {
    name: "Pet Food",
    image: "https://i.ibb.co/pxv2B7C/pet-food-category.jpg",
    route: "Pet-Food",
  },
  {
    name: "Accessories",
    image: "https://i.ibb.co/Wx59TjN/pet-accessories.jpg",
    route: "Accessories",
  },
  {
    name: "Pet Care Products",
    image: "https://i.ibb.co/2Mtbk3V/pet-care-category.jpg",
    route: "Pet-Care-Products",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-auto px-4 py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/category-filtered-product/${cat.route}`)}
            className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-lg">{cat.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;

