import React, { useEffect, useState } from "react";
import Items from "./Items";

const SavedPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataFromLocal = JSON.parse(localStorage.getItem("saved"));
    if (dataFromLocal) {
      setData(dataFromLocal);
    }
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div className="inSavedContainer">
            <Items item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default SavedPage;
