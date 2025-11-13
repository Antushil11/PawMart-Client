import React from "react";
import { Heart, PawPrint, ShieldCheck } from "lucide-react";

const WhyAdopt = () => {
  return (
    <section className="mt-6 py-14 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-primary">Why Adopt from PawMart?</h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-10">
        Every adoption gives a pet a second chance at happiness. By choosing to adopt,
        you’re not only saving a life but also helping reduce pet homelessness and supporting
        a caring community .
      </p>

      <div className="grid md:grid-cols-3  gap-6 w-11/12 mx-auto">
        <div className="p-6 bg-[#FFF8F3]  rounded-2xl shadow-md">
          <Heart className="mx-auto text-pink-500 h-10 w-10 mb-3" />
          <h3 className="font-semibold text-lg">Save a Life</h3>
          <p className="text-gray-500 mt-2">
            Each adoption helps a rescued pet find warmth, safety, and unconditional love.
          </p>
        </div>

        <div className="p-6 bg-[#FFF8F3]  rounded-2xl shadow-md">
          <PawPrint className="mx-auto text-orange-500 h-10 w-10 mb-3" />
          <h3 className="font-semibold text-lg">Companionship</h3>
          <p className="text-gray-500 mt-2">
            Pets bring happiness, comfort, and emotional support to their adoptive families.
          </p>
        </div>

        <div className="p-6 bg-[#FFF8F3]  rounded-2xl shadow-md">
          <ShieldCheck className="mx-auto text-blue-500 h-10 w-10 mb-3" />
          <h3 className="font-semibold text-lg">Ethical Choice</h3>
          <p className="text-gray-500 mt-2">
            Adoption promotes kindness and discourages unethical pet breeding practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyAdopt;
