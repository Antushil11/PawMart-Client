import React from "react";

const AddListing = () => {
  return (
    <div className="card border mt-10 border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">  Add New Listing</h2>
        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="label font-medium">Pet Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Pet Name"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Vehicles">Pets</option>
              <option value="Plants">Accessories</option>
              <option value="Foods">Foods</option>
              <option value="Home & Living">Care Products</option>
            </select>
          </div>

          {/* bid amount */}
          <div>
            <label className="label font-medium">price</label>
            <input
              type="text"
              name="price_max"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Max price"
            />
          </div>

           {/* Location */}
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

          {/* Description Textarea */}
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

           {/* Image URL */}
          <div>
            <label className="label font-medium">Image (URL)</label>
            <input
              type="url"
              name="thumbnail"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Image (URL)"
            />
          </div>
          
        {/* Date */}
        <div>
          <label className="block text-gray-700 mb-1">Date </label>
          <input
            type="date"
            name="date"
            required           
            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
          />
        </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full rounded-xl md:text-[14px] md:p-4  lg:text-[16px] lg:p-6 border-gray-300  btn-sm bg-primary text-white"
          >
              Add Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
