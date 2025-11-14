import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AddListing = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const category = e.target.category.value;

    const formData = {
      name: e.target.name.value,
      category,
      price: category === "Pets" ? 0 : e.target.price.value,
      location: e.target.location.value,
      description: e.target.description.value,
      image: e.target.image.value,
      date: e.target.date.value,
      email: user.email,
    };

    fetch(`http://localhost:3000/models`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added!");
        console.log(data);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border mt-10 border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative bg-[#F8F1E8]">
        <h2 className="text-2xl font-bold text-center mb-6">
          Add New Listing
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="label font-medium">Product / Pet Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue=""
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Pets">Pets (Adoption)</option>
              <option value="Food">Pet Food</option>
              <option value="Accessories">Accessories</option>
              <option value="Care Products">Care Products</option>
            </select>
          </div>

          <div>
            <label className="label font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price (auto 0 for pets)"
            />
          </div>

          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter location"
            />
          </div>

          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[250px]"
              placeholder="Enter description"
            ></textarea>
          </div>

          <div>
            <label className="label font-medium">Image (URL)</label>
            <input
              type="url"
              name="image"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter image URL"
            />
          </div>

          <div>
            <label className="label font-medium">Date (Pick Up)</label>
            <input
              type="date"
              name="date"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
            />
          </div>

          <div>
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              readOnly
              value={user?.email || ""}
              className="input w-full rounded-full focus:outline-gray-200 bg-gray-100"
            />
          </div>

          <button
            type="submit"
            className="btn w-full rounded-xl md:text-[14px] md:p-4 lg:text-[16px] lg:p-6 border-gray-300 btn-sm bg-primary text-white"
          >
            Add Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
