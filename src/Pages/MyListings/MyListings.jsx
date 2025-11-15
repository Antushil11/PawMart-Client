import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`https://pawmartserver-lemon.vercel.app/models?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch(() => setListings([]))
      .finally(() => setLoading(false));
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This listing will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pawmartserver-lemon.vercel.app/models/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your listing has been deleted.", "success");
            setListings(listings.filter((listing) => listing._id !== id));
          });
      }
    });
  };

  const handleOpenUpdate = (listing) => {
    setSelectedListing(listing);
    setUpdatedName(listing.name);
    setUpdatedPrice(listing.price);
    document.getElementById("update_modal").showModal();
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://pawmartserver-lemon.vercel.app/models/${selectedListing._id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: updatedName, price: updatedPrice }),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setListings(
          listings.map((listing) =>
            listing._id === selectedListing._id
              ? { ...listing, name: updatedName, price: updatedPrice }
              : listing
          )
        );
        document.getElementById("update_modal").close();
        Swal.fire("Updated!", "Your listing has been updated.", "success");
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-primary text-center">
        My Listings
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow-md bg-[#F8F1E8] ">
          <table className="table w-full">
            <thead className="bg-base-200 text-base font-semibold">
              <tr>
                <th>SL</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Date</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.length > 0 ? (
                listings.map((listing, i) => (
                  <tr key={listing._id}>
                    <td>{i + 1}</td>
                    <td className="font-medium">{listing.name}</td>
                    <td>{listing.category}</td>
                    <td>${listing.price}</td>
                    <td>{new Date(listing.date).toLocaleDateString()}</td>
                    <td className="flex gap-2 justify-center">
                      <button
                        onClick={() => handleOpenUpdate(listing)}
                        className="btn btn-sm btn-outline btn-primary"
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(listing._id)}
                        className="btn btn-sm btn-outline btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-6 text-gray-500">
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-base-100">
          <h3 className="font-bold text-lg mb-4 text-primary">
            Update Listing
          </h3>
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label font-semibold">Name</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-semibold">Price</label>
              <input
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => document.getElementById("update_modal").close()}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default MyListings;
