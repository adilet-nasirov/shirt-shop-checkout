import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60rem",
  bgcolor: "white",
  border: "1px solid grey",
  borderRadius: "25px",
  boxShadow: 24,
  p: 0,
};

export default function ModalWindow({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const filtered = data.filter((item) => item.count !== 0);
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <p onClick={handleOpen} className="gotoCheckout">
        Go to checkout
      </p>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="mainscreen">
            {/* <!-- <img src="https://image.freepik.com/free-vector/purple-background-with-neon-frame_52683-34124.jpg"  className="bgimg " alt="">-->  */}
            <div className="card">
              <div className="leftside">
                <img
                  src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
                  className="product"
                  alt="Shoes"
                />
              </div>
              <div className="rightside">
                <form action="">
                  <h1>CheckOut</h1>
                  <h2>Payment Information</h2>
                  <p>Cardholder Name</p>
                  <input
                    type="text"
                    className="inputbox"
                    name="name"
                    required
                  />
                  <p>Card Number</p>
                  <input
                    type="number"
                    className="inputbox"
                    name="card_number"
                    id="card_number"
                    required
                  />

                  <p>Card Type</p>
                  <select
                    className="inputbox"
                    name="card_type"
                    id="card_type"
                    required
                  >
                    <option value="">--Select a Card Type--</option>
                    <option value="Visa">Visa</option>
                    <option value="RuPay">RuPay</option>
                    <option value="MasterCard">MasterCard</option>
                  </select>
                  <div className="expcvv">
                    <p className="expcvv_text">Expiry</p>
                    <input
                      type="date"
                      className="inputbox"
                      name="exp_date"
                      id="exp_date"
                      required
                    />

                    <p className="expcvv_text2">CVV</p>
                    <input
                      type="password"
                      className="inputbox"
                      name="cvv"
                      id="cvv"
                      required
                    />
                  </div>
                  <p></p>
                  <button type="submit" className="buttonModal">
                    CheckOut
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
