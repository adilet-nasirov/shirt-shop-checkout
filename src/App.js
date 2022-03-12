import logo from "./logo.svg";
import "./App.css";
import Items from "./components/Items";
import shirts from "./data";
import { useEffect, useState } from "react";
import Checkout from "./components/checkout";
function App() {
  //hooks
  const [data, setData] = useState(shirts);
  const [shouldPopup, setShouldPopup] = useState(false);
  const [msg, setMsg] = useState("Successfully saved!");
  const qtyAdder = (e) => {
    try {
      let quantity = Number(e.target.value);
      let index = Number(e.target.id);
      const newData = [...data];
      newData[index].count = quantity;
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };
  const incrementHandler = (index) => {
    const newData = [...data];
    newData[index].count++;
    setData(newData);
  };
  const decrementHandler = (index) => {
    const newData = [...data];
    if (newData[index].count) {
      newData[index].count--;
      setData(newData);
    }
  };
  const handleDelete = (id) => {
    const newData = [...data];
    const filtered = newData.filter((item) => item.id !== id);
    setData(filtered);
  };
  const handleSaveForLater = (item) => {
    console.log("click");
    const dataInLocal = JSON.parse(localStorage.getItem("saved"));
    if (dataInLocal) {
      if (dataInLocal.some((el) => el.id === item.id)) {
        setMsg("It is already in saved");
      } else {
        setMsg("Successfully saved!");
        localStorage.setItem("saved", JSON.stringify([...dataInLocal, item]));
      }
    } else {
      setMsg("Successfully saved!");
      localStorage.setItem("saved", JSON.stringify([item]));
    }
    setTimeout(() => {
      setShouldPopup(false);
    }, 1000);
    setShouldPopup(true);
  };
  // console.log(data);
  return (
    <div className="App">
      <div className="Home">
        {shouldPopup ? <div className="popup">{msg}</div> : <div></div>}
        <div className="container">
          <div className="T-shirts">
            {data.map((item, index) => {
              return (
                <Items
                  handleSaveForLater={handleSaveForLater}
                  handleDelete={handleDelete}
                  incrementHandler={incrementHandler}
                  item={item}
                  qtyHandler={qtyAdder}
                  index={index}
                  decrementHandler={decrementHandler}
                />
              );
            })}
          </div>
          <Checkout data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
