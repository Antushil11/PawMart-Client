import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [selectedListing, setSelectedListing] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedPrice, setUpdatedPrice] = useState("");

  // Fetch only logged-in user's listings
  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:3000/models?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setListings(data))
      .catch(() => setListings([]));
  }, [user]);

  // Delete listing
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This listing will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then(() => {
            Swal.fire("Deleted!", "Your listing has been deleted.", "success");
            setListings(listings.filter((listing) => listing._id !== id));
          });
      }
    });
  };

  // Open update modal using native dialog
  const handleOpenUpdate = (listing) => {
    setSelectedListing(listing);
    setUpdatedName(listing.name);
    setUpdatedPrice(listing.price);
    const modal = document.getElementById("update_modal");
    modal.showModal();
  };

  // Update listing
  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/models/${selectedListing._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: updatedName, price: updatedPrice }),
    })
      .then((res) => res.json())
      .then(() => {
        setListings(
          listings.map((listing) =>
            listing._id === selectedListing._id
              ? { ...listing, name: updatedName, price: updatedPrice }
              : listing
          )
        );
        document.getElementById("update_modal").close(); // close modal
        Swal.fire("Updated!", "Your listing has been updated.", "success");
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Listings</h1>
      <div className="overflow-x-auto border rounded-lg">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.length > 0 ? (
              listings.map((listing, i) => (
                <tr key={listing._id}>
                  <td>{i + 1}</td>
                  <td>{listing.name}</td>
                  <td>{listing.category}</td>
                  <td>{listing.price}</td>
                  <td>{new Date(listing.date).toLocaleDateString()}</td>
                  <td className="flex gap-2">
                    <button
                      onClick={() => handleOpenUpdate(listing)}
                      className="btn btn-sm btn-primary"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(listing._id)}
                      className="btn btn-sm btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Native Dialog Modal */}
      <dialog id="update_modal" className="modal modal-bottom sm:modal-middle">
        <form
          method="dialog"
          className="modal-box w-full max-w-md"
          onSubmit={handleUpdateSubmit}
        >
          <h3 className="font-bold text-lg mb-4">Update Listing</h3>
          <div className="space-y-4">
            <div>
              <label className="label">Name</label>
              <input
                type="text"
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
                className="input w-full border rounded"
                required
              />
            </div>
            <div>
              <label className="label">Price</label>
              <input
                type="number"
                value={updatedPrice}
                onChange={(e) => setUpdatedPrice(e.target.value)}
                className="input w-full border rounded"
                required
              />
            </div>
          </div>
          <div className="modal-action">
            <button
              type="button"
              className="btn btn-gray"
              onClick={() => document.getElementById("update_modal").close()}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default MyListings;
