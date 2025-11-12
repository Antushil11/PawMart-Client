import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false); // added loading state

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true); // start loading
    fetch(`http://localhost:3000/bids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false)); // stop loading
  }, [user]);

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("My Orders Report", 14, 10);

    autoTable(doc, {
      head: [["Product Name", "Buyer", "Price", "Qty", "Address", "Date", "Phone"]],
      body: orders.map((order) => [
        order.product_name,
        order.buyer_name,
        order.price,
        order.quantity,
        order.address,
        order.date,
        order.phone,
      ]),
      startY: 20,
    });

    doc.save("MyOrdersReport.pdf");
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {loading ? ( // show loading while fetching
        <div className="text-center py-6">Loading orders...</div>
      ) : (
        <div className="overflow-x-auto border rounded-lg">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Buyer</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Address</th>
                <th>Date</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order, i) => (
                  <tr key={i}>
                    <td>{order.product_name}</td>
                    <td>{order.buyer_name}</td>
                    <td>{order.price}</td>
                    <td>{order.quantity}</td>
                    <td>{order.address}</td>
                    <td>{order.date}</td>
                    <td>{order.phone}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <button
        onClick={handleDownloadPDF}
        className="btn btn-primary mt-6 rounded-full"
        disabled={loading || orders.length === 0} // disable button while loading or no orders
      >
        Download Report
      </button>
    </div>
  );
};

export default MyOrders;
