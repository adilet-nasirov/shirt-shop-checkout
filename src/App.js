import logo from "./logo.svg";
import "./App.css";
import Items from "./components/Items";
import shirts from "./data";
import { useEffect, useState } from "react";
import Checkout from "./components/checkout";
function App() {
  //hooks
  const [data, setData] = useState(shirts);
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
  const incrementHandler = () => {
    const newData = [...data];
    newData[index].count = quantity;
    setData(newData);
  };

  console.log(data);
  return (
    <div className="App">
      <div className="T-shirts">
        {data.map((item, index) => {
          return <Items item={item} qtyHandler={qtyAdder} index={index} />;
        })}
      </div>
      <Checkout data={data} />
    </div>
  );
}

export default App;
