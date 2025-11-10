import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryFilteredProduct = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const allProducts = [
    { id: 1, name: "Golden Retriever Puppy", category: "Pets", image: "https://i.ibb.co/5Tq8zKj/dog.jpg" },
    { id: 2, name: "Whiskas Cat Food", category: "Pet-Food", image: "https://i.ibb.co/d6pG1y1/cat-food.jpg" },
    { id: 3, name: "Dog Collar", category: "Accessories", image: "https://i.ibb.co/m6RQtCR/collar.jpg" },
    { id: 4, name: "Pet Shampoo", category: "Pet-Care-Products", image: "https://i.ibb.co/4jMRCPR/shampoo.jpg" },
  ];

  useEffect(() => {
    const filtered = allProducts.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );
    setProducts(filtered);
  }, [categoryName]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Showing results for: {categoryName.replace("-", " ")}
      </h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-xl overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found in this category.</p>
      )}
    </div>
  );
};

export default CategoryFilteredProduct;
