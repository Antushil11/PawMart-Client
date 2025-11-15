import React, { use,  useEffect,  useRef, useState, } from "react";
import { Link,  useParams } from "react-router";
import { AuthContext } from "../../context/AuthContext";

import Swal from "sweetalert2";

const ListingDetails = () => {

  const {id} = useParams()
  const [model, setmModel] = useState([])
  const [loading, setLoading] = useState(true)
  const { user } = use(AuthContext);
  

     useEffect(() =>{

      fetch(`http://localhost:3000/models/${id}`,{
      headers:{
        authorization: `Bearer ${user.accessToken}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setmModel(data.result)
      setLoading(false)
    })
  },[id,user])


  const bidModalRef = useRef(null);
  

  

  

  // const productId = model?._id;




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

    console.log(
      name,
      email,
      listingId,
      listingName,
      quantity,
      price,
      address,
      date,
      phone,
      notes
    );

    const newBid = {
      product: model._id,
      buyer_name: name,
      email: email,
      product_id: listingId,
      product_name: listingName,
      price: price,
      quantity: quantity,
      address: address,
      date: date,
      phone: phone,
      additional_notes: notes,
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        bidModalRef.current.close()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your Order has been placed",
          showConfirmButton: false,
          timer: 1500,
        });

        console.log("after a bids ", data);
      });
  };

  if(loading){
    return <div>Loading .............</div>
  }

  return (
    <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={model.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold ">Name: {model.name}</h1>

            <div className="flex  gap-3">
              <p className="text-base md:text-lg">
                Category: <span className="font-medium">{model.category}</span>
              </p>
            </div>
            <p className="leading-relaxed  text-base md:text-lg">
               Email: <span>{model.email}</span>
            </p>
            <p className="leading-relaxed text-base md:text-lg">
              Location: {model.location}
            </p>
            <p className="text-base font-semibold ">Price: {`$ ${model.price}`}</p>

            <p className="leading-relaxed text-base md:text-lg">
              {model.description}
            </p>

            <div className="flex gap-3 mt-6">
              {/* <Link
                to={`/update-model/${model._id}`}
                className="btn btn-primary rounded-full "
              >
                Update Model
              </Link> */}
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button onClick={handleBidModalOpen} className="btn btn-primary">
              Order Now
            </button>
            <dialog
              ref={bidModalRef}
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <h3 className="font-bold text-lg">Give the Best offer!</h3>
                <p className="py-4">
                  offer something good and make the seller happy.
                </p>

                <form onSubmit={handleBidsSubmit}>
                  <fieldset className="fieldset">
                    {/* user name */}
                    <label className="label">Name</label>
                    <input
                      type="text"
                      className="input"
                      name="name"
                      readOnly
                      defaultValue={user.displayName}
                    />

                    {/* email */}

                    <label className="label">email</label>
                    <input
                      type="email"
                      className="input"
                      name="email"
                      readOnly
                      defaultValue={user.email}
                    />
                    {/* Product ID */}
                    <div>
                      <label className="block font-medium mb-1">
                        Product / Listing ID
                      </label>
                      <input
                        type="text"
                        name="listingId"
                        readOnly
                        value={model?._id || ""}
                        className="input input-bordered w-full bg-gray-100"
                      />
                    </div>

                    {/* Product Name */}
                    <div>
                      <label className="block font-medium mb-1">
                        Product / Listing Name
                      </label>
                      <input
                        type="text"
                        name="listingName"
                        readOnly
                        value={model?.name || ""}
                        className="input input-bordered w-full bg-gray-100"
                      />
                    </div>

                    {/* Quantity */}
                    <div>
                      <label className="block font-medium mb-1">Quantity</label>
                      <input
                        type="number"
                        name="quantity"
                        defaultValue={model?.category === "Pets" ? 1 : ""}
                        readOnly={model?.category === "Pets"}
                        placeholder="Enter quantity"
                        className="input input-bordered "
                      />
                    </div>

                    {/* Price */}
                    <div>
                      <label className="block font-medium mb-1">Price</label>
                      <input
                        type="text"
                        name="price"
                        readOnly
                        value={`$${model?.price || ""}`}
                        defaultValue={user.price}
                        className="input input-bordered w-full bg-gray-100"
                      />
                    </div>

                    {/* Address */}
                    <div>
                      <label className="block font-medium mb-1">Address</label>
                      <input
                        type="text"
                        name="address"
                        required
                        placeholder="Enter your address"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Date (Pick up) */}
                    <div>
                      <label className="block font-medium mb-1">
                        Date (Pick Up)
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block font-medium mb-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter your phone number"
                        className="input input-bordered w-full"
                      />
                    </div>

                    {/* Additional Notes */}
                    <div>
                      <label className="block font-medium mb-1">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        rows="3"
                        placeholder="Add any special request..."
                        className="textarea textarea-bordered w-full"
                      ></textarea>
                    </div>

                    <button className="btn btn-primary w-full mt-4 rounded-full">
                      Confirm Order
                    </button>
                  </fieldset>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
