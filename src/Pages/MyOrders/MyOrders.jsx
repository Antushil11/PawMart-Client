import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user?.email) return;
    setLoading(true);
    fetch(`http://localhost:3000/bids?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
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
      <h1 className="text-3xl font-bold mb-6 text-center">My Orders</h1>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <div className="overflow-x-auto border rounded-lg shadow-md">
          <table className="table w-full">
            <thead className="bg-base-200 text-base font-semibold">
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
                orders.map((order) => (
                  <tr key={order._id}>
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
                  <td colSpan="7" className="text-center py-6">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex justify-center mt-6">
        <button
          onClick={handleDownloadPDF}
          className="btn btn-primary btn-wide rounded-full"
          disabled={loading || orders.length === 0}
        >
          Download Report
        </button>
      </div>
    </div>
  );
};

export default MyOrders;
