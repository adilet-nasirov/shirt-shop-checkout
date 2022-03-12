import React from "react";

const Checkout = ({ data }) => {
  let totalPrice = 0;
  return (
    <div className="checkout">
      <p className="gotoCheckout">Go to checkout</p>
      {data.map((item) => {
        totalPrice += item.price * item.count;
        return (
          <div className="checkout-info" key={`abc${item.id}`}>
            <p>{item.name}</p>
            <p>${(item.price * item.count).toFixed(2)}</p>
          </div>
        );
      })}
      <div className="checkout-info">
        <p>Shipping</p>
        <p>free</p>
      </div>
      <hr />
      <div className="checkout-info">
        <p>Subtotal</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Checkout;
