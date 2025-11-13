import React from "react";

const heroes = [
  {
    name: "Arafat Rahman",
    role: "Adopted 3 pets",
    image: "https://i.ibb.co/SX01c2bt/young-indian-man-playing-with-boxer-dog-on-green-summer-lawn-in-public-park-outdoor-dog-training-on.jpg",
    quote: "Adopting from PawMart changed my life — and theirs!",
  },
  {
    name: "Riya Sultana",
    role: "Animal Care Volunteer",
    image: "https://i.ibb.co/k2Mn4DgX/2628089-happy-smile-and-portrait-of-indian-woman-in-office-for-management-planning-and-data-research.jpg",
    quote: "Every rescued pet deserves a loving home and a happy life.",
  },
  {
    name: "Tanvir Hasan",
    role: "Pet Foster Parent",
    image: "https://i.ibb.co/DfxcjPh1/11065574-a-portrait-of-a-young-indian-man.jpg",
    quote: "Being a foster is the best feeling — giving them love till they find their forever home.",
  },
];

const PetHeroes = () => {
  return (
    <section className="py-14 b text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Meet Our Pet Heroes</h2>
      <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
        These amazing individuals have opened their hearts and homes to pets in need.
        Their kindness keeps PawMart’s mission alive.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        {heroes.map((hero, index) => (
          <div key={index} className="p-6 border rounded-2xl shadow-md bg-[#FFF8F3]">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="font-bold text-lg">{hero.name}</h3>
            <p className="text-sm text-gray-500 mb-3">{hero.role}</p>
            <p className="italic text-gray-600">“{hero.quote}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PetHeroes;
