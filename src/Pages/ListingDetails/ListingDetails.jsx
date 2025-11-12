import React, { useEffect, useRef, useState, useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const ListingDetails = () => {
  const data = useLoaderData();
  const bidModalRef = useRef(null);
  const [bids, setBids] = useState([]);
  const { user } = useContext(AuthContext);
  const model = data?.result || {};
  const productId = model?._id;

  useEffect(() => {
    if (!productId) return;
    fetch(`http://localhost:3000/models/bids/${productId}`)
      .then((res) => res.json())
      .then((data) => setBids(data))
      .catch(() => setBids([]));
  }, [productId]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBidsSubmit = (e) => {
    e.preventDefault();
    const name = user?.displayName || "Anonymous";
    const email = user?.email;
    const listingId = model?._id;
    const listingName = model?.name;
    const quantity = model?.category === "Pets" ? 1 : e.target.quantity.value;
    const price = model?.price;
    const address = e.target.address.value;
    const date = e.target.date.value;
    const phone = e.target.phone.value;
    const notes = e.target.notes.value;

    const newBid = {
      product: model._id,
      buyer_name: name,
      email,
      product_id: listingId,
      product_name: listingName,
      price,
      quantity,
      address,
      date,
      phone,
      additional_notes: notes,
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Order has been placed",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={model.image}
              alt={model.name}
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold">{model.name}</h1>
            <p className="text-sm">
              Category: <span className="font-medium">{model.category}</span>
            </p>
            <p className="text-base font-semibold">{`$ ${model.price}`}</p>
            <p className="leading-relaxed text-base md:text-lg">
              {model.description}
            </p>
            <button onClick={handleBidModalOpen} className="btn mt-4">
              Order Now
            </button>
            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Confirm Your Order</h3>
                <form onSubmit={handleBidsSubmit}>
                  <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      name="name"
                      readOnly
                      defaultValue={user?.displayName || ""}
                    />
                    <label className="label">Email</label>
                    <input
                      type="email"
                      className="input"
                      name="email"
                      readOnly
                      defaultValue={user?.email || ""}
                    />
                    <label className="label">Product ID</label>
                    <input
                      type="text"
                      name="listingId"
                      readOnly
                      value={model?._id || ""}
                      className="input input-bordered bg-gray-100"
                    />
                    <label className="label">Product Name</label>
                    <input
                      type="text"
                      name="listingName"
                      readOnly
                      value={model?.name || ""}
                      className="input input-bordered bg-gray-100"
                    />
                    <label className="label">Quantity</label>
                    <input
                      type="number"
                      name="quantity"
                      defaultValue={model?.category === "Pets" ? 1 : ""}
                      readOnly={model?.category === "Pets"}
                      placeholder="Enter quantity"
                      className="input input-bordered"
                    />
                    <label className="label">Price</label>
                    <input
                      type="text"
                      name="price"
                      readOnly
                      value={`$${model?.price || 0}`}
                      className="input input-bordered bg-gray-100"
                    />
                    <label className="label">Address</label>
                    <input
                      type="text"
                      name="address"
                      required
                      placeholder="Enter your address"
                      className="input input-bordered"
                    />
                    <label className="label">Date (Pick Up)</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="input input-bordered"
                    />
                    <label className="label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter your phone number"
                      className="input input-bordered"
                    />
                    <label className="label">Additional Notes</label>
                    <textarea
                      name="notes"
                      rows="3"
                      placeholder="Any special request..."
                      className="textarea textarea-bordered"
                    ></textarea>
                    <button className="btn btn-primary w-full mt-4 rounded-full">
                      Confirm Order
                    </button>
                  </fieldset>
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">
          Bids for this Product:
          <span className="text-primary">{bids}</span>
        </h3>
      </div>
    </div>
  );
};

export default ListingDetails;
