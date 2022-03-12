import React from "react";
import "./items.css";
const Items = ({ item, qtyHandler, index }) => {
  return (
    <div className="item" key={index}>
      <p style={{ margin: 0 }}>{item.seller}</p>
      <hr style={{ width: "90%" }} color="green" />
      <div className="item-info">
        <div style={{ display: "flex" }}>
          <img src={item.url} width="100" alt="" />
          <h3 style={{ marginLeft: "5px" }}>{item.name}</h3>
        </div>
        <div className="right-itemInfo">
          <div className="qty">
            <div>
              <label htmlFor="qty">QTY:</label>
              <input
                className="qtyInput"
                type="text"
                id={index}
                onChange={(e) => qtyHandler(e)}
              />
              <span>-</span>
              <span>+</span>
            </div>
            <p>${item.price}</p>
          </div>
          <div className="bottomRight">
            <a href="#">save for later </a>
            <span>|</span>
            <a href="#"> remove</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
