import React from "react";
import { useNavigate } from "react-router";

const categories = [
  {
    name: "Pets (Adoption)",
    image: "https://i.ibb.co/JWjSvFXm/adopt-me-pet-02032021.jpg",
    route: "Pets",
  },
  {
    name: "Pet Food",
    image: "https://i.ibb.co/WvwqscCM/105709589-dog-food-weigh-jpg.webp",
    route: "Pet-Food",
  },
  {
    name: "Accessories",
    image: "https://i.ibb.co/7x3MZCdh/pet-accessories-still-life-concept-with-leash-colorful-toys-23-2148949615.jpg",
    route: "Accessories",
  },
  {
    name: "Pet Care Products",
    image: "https://i.ibb.co/WvtBTrJK/Mars-Petcare-jpeg-width-500-name-Mars-Petcare.jpg",
    route: "Pet-Care-Products",
  },
];

const CategorySection = () => {
  const navigate = useNavigate();

  return (
    <div className=" mx-auto px-4 py-10 ">
      
      <h2 className="lg:text-3xl mb-6 text-2xl font-bold text-center lg:mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/category-filtered-product/${cat.route}`)}
            className="cursor-pointer bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:scale-105 transition-transform"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-80 object-cover" />
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

