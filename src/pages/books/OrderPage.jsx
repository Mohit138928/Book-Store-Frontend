import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/features/orders/ordersAPI";
import { useAuth } from "../../context/AuthContext";

const OrderPage = () => {
  const { currentUser } = useAuth();
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) return <div>Error Getting Orders Data.</div>;
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold">Your Order</h2>
      <div className="w-[55px] h-[4px] bg-primary mb-5"></div>
      {orders.length === 0 ? (
        <div>No Orders Found!</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={order._id} className="border-b mb-4 pb-4">
            <p className="p-1 bg-secondary text-white w-max mb-1">Order Number - {index+1} :</p>
              <h2 className="font-bold">Order ID: {order?._id}</h2>
              <p className="text-gray-600">Name: {order?.name}</p>
              <p className="text-gray-600">Email: {order?.email}</p>
              <p className="text-gray-600">Phone: {order?.phone}</p>
              <p className="text-gray-600">Total Price: ${order?.totalPrice}</p>
              <h3 className="font-semibold mt-2">Address:</h3>
              <p> {order?.address.city}, {order?.address.state}, {order?.address.country}, {order?.address.zipcode}</p>
              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
              {
                order.productIds.map((productId, index) => (
                    <li key={productId}><strong>{index+1}.</strong> {productId}</li>
                ))
              }
                
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
