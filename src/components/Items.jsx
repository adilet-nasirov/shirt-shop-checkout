import React from "react";
import "./items.css";
const Items = ({
  decrementHandler,
  incrementHandler,
  item,
  qtyHandler,
  index,
  handleDelete,
  handleSaveForLater,
}) => {
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
            <div className="qtyInfos">
              <label htmlFor="qty">QTY:</label>
              <input
                className="qtyInput"
                type="text"
                value={item.count}
                id={index}
                onChange={(e) => qtyHandler(e)}
              />
              <div className="btns">
                <span
                  onClick={() => incrementHandler(index)}
                  className="plusBtn button"
                >
                  +
                </span>
                <span
                  className="minusBtn button"
                  onClick={() => {
                    decrementHandler(index);
                  }}
                >
                  -
                </span>
              </div>
            </div>
            <p>${item.price}</p>
          </div>
          <div className="bottomRight">
            <a onClick={() => handleSaveForLater(item)}>save for later </a>
            <span>|</span>
            <a onClick={() => handleDelete(item.id)}> remove</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
