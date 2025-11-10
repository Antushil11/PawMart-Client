import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryFilteredProduct = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  const allProducts = [
    // 🐶 Pets (Adoption) — 6 Cards
    {
      id: 1,
      name: "Golden Retriever Puppy",
      category: "Pets",
      image: "https://i.ibb.co/zVsbBhPg/Untitled-design-40.jpg",
    },
    {
      id: 2,
      name: "Persian Cat",
      category: "Pets",
      image: "https://i.ibb.co/PZq3jBhn/spruce-pets-persian-cat-header-8a7203fbe8574f7e8dbc22cc99c5b606.webp",
    },
    {
      id: 3,
      name: "Parrot (Green Ringneck)",
      category: "Pets",
      image: "https://i.ibb.co/xq4gVGmg/images-q-tbn-ANd9-Gc-TXf-Z8o70-C6u-Qz-K79-SJEb7-OMKZtmbk1p-Dx-URWM2-IEOl-BH-XQe-AHs-BOuz-Q-s.jpg",
    },
    {
      id: 4,
      name: "Rabbit (White Angora)",
      category: "Pets",
      image: "https://i.ibb.co/mFSSbWDB/images-q-tbn-ANd9-Gc-SHBn-ATY-BHwnv8t3-AB4h-SRx-ZJ16ds-H8-Fk70-LWZ9qb-Ylg-N6-C2q-Ol-GQw-PJc-s.jpg",
    },
    {
      id: 5,
      name: "Siberian Husky Puppy",
      category: "Pets",
      image: "https://i.ibb.co/ZRQ00S5b/lovebirds130853820-resized-58a6f2a33df78c345b6314f1.webp",
    },
    {
      id: 6,
      name: "Lovebird Pair",
      category: "Pets",
      image: "https://i.ibb.co/N2LYs9g3/Rose-ringed-parakeet-Psittacula-krameri-borealis-male-Jaipur-2.jpg",
    },
    

    // 🍖 Pet Food
    {
      id: 7,
      name: "Pawlicious Bites",
      category: "Pet-Food",
      image: "https://i.ibb.co/7dpF6jLT/personalised-treats.webp",
    },
    {
      id: 8,
      name: "OceanTreat Tuna Mix –",
      category: "Pet-Food",
      image: "https://i.ibb.co/SXm2Yc4D/71hj-c-Lakh-L-AC-SX425-PIbundle-12-Top-Right-0-0-SH20.jpg",
    },
    {
      id: 9,
      name: "HealthyPaws Chicken Delight",
      category: "Pet-Food",
      image: "https://i.ibb.co/F4g97dZz/71-Al-ZHm6-OEL-AC-SX425-PIbundle-5-Top-Right-0-0-SH20.jpg",
    },
    {
      id: 10,
      name: "NutriBone Meal",
      category: "Pet-Food",
      image: "https://i.ibb.co/HfmpFqRZ/41d8-AVJygf-L-SX425.jpg",
    },
    {
      id: 11,
      name: "WhiskerFeast Gourmet",
      category: "Pet-Food",
      image: "https://i.ibb.co/qY2qwWDr/2ed60540-838f-44a0-ba3e-185fa2e88bfd.jpg",
    },
    {
      id: 12,
      name: "NatureNibble Grain-Free",
      category: "Pet-Food",
      image: "https://i.ibb.co/r2WYZ635/granola-bar-packaging.jpg",
    },

    // 🎀 Accessories
    {
      id: 13,
      name: "FurryCharm Collar",
      category: "Accessories",
      image: "https://i.ibb.co/hFw4DGYc/51-Bh-Ve8-MIm-L-AC-SX425.jpg",
    },
    {
      id: 14,
      name: "CozyPaw Bed",
      category: "Accessories",
      image: "https://i.ibb.co/9kJXZCHY/618-Tdibce-DL-AC-SY450.jpg",
    },
    {
      id: 15,
      name: "PawGrip Leash",
      category: "Accessories",
      image: "https://i.ibb.co/hx87d37G/81k-Fm-KSjkr-L-AC-SL1500.jpg",
    },
    {
      id: 16,
      name: "FetchFun Toy Set",
      category: "Accessories",
      image: "https://i.ibb.co/hFdpSNNL/61nu-Yc-Cod-CL-AC-SY450.jpg",
    },
    {
      id: 17,
      name: "ShinyCoat Brush –",
      category: "Accessories",
      image: "https://i.ibb.co/27XwjxF0/71va-Ocx-S3-IL-AC-SX425.jpg",
    },
    {
      id: 18,
      name: "HydroBowl Portable Feeder",
      category: "Accessories",
      image: "https://i.ibb.co/hxL9n4VZ/71vq-Zf-FIt-IL-AC-SY450.jpg",
    },

    // 🧴 Pet Care Products
    {
      id: 19,
      name: "FreshFur Shampoo",
      category: "Pet-Care-Products",
      image: "https://i.ibb.co/MxRsQw7j/81-DZ66-Iz-Ye-L-AC-SY450.jpg",
    },
    {
      id: 20,
      name: "PawGuard Sanitizer Spray",
      category: "Pet-Care-Products",
      image: "https://i.ibb.co/Fbc7WXDp/51-Hl-V0-ZR-u-L-AC-SY450.jpg",
    },
    {
      id: 21,
      name: "BrightBite Dental Gel",
      category: "Pet-Care-Products",
      image: "https://i.ibb.co/hFj5Rst2/61qa-CTq-CBL-AC-SY450.jpg",
    },
    {
      id: 22,
      name: "SoftPaw Wipes",
      category: "Pet-Care-Products",
      image: "https://i.ibb.co/7JMNfhs6/71d-Clu-NSe-JL-AC-SY450.jpg",
    },
    {
      id: 23,
      name: "CalmiPet Serum",
      category: "Pet-Care-Products",
      image: "https://i.ibb.co/tpkfV6gf/81-DSx-G0-Uto-L-AC-SY450.jpg",
    },
    {
      id: 24,
      name: "TickAway Drops",
      category: "Pet-Care-Products",
      image: "https://i.ibb.co/YF15w8T1/71-W4q-Ldl2o-L-AC-SY450.jpg",
    },
    
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
        Showing : {categoryName.replace("-", " ")}
      </h2>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition-transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-lg">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No products found in this category.
        </p>
      )}
    </div>
  );
};

export default CategoryFilteredProduct;
