import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's own listings
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`http://localhost:5000/listings?email=${user.email}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setListings(data);
//           setLoading(false);
//         })
//         .catch((err) => console.error(err));
//     }
//   }, [user]);

  // Delete listing
//   const handleDelete = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "This listing will be permanently deleted!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#e74c3c",
//       cancelButtonColor: "#7f8c8d",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         fetch(`http://localhost:3000/listings/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => res.json())
//           .then((data) => {
//             if (data.deletedCount > 0) {
//               setListings(listings.filter((item) => item._id !== id));
//               Swal.fire("Deleted!", "Your listing has been removed.", "success");
//             }
//           });
//       }
//     });
//   };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">My Listings</h2>

      {listings.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any listings yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border rounded-lg">
            <thead className="bg-base-200">
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {listings.map((listing, index) => (
                <tr key={listing._id} className="hover">
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </td>
                  <td className="font-medium">{listing.name}</td>
                  <td>{listing.category}</td>
                  <td>${listing.price}</td>
                  <td>{listing.location || "N/A"}</td>
                  <td>
                    <div className="flex gap-2">
                      <Link
                        to={`/update-model/${listing._id}`}
                        className="btn btn-sm btn-primary"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(listing._id)}
                        className="btn btn-sm btn-error text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyListings;
