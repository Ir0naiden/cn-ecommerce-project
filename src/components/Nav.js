import React, { useState } from "react";
import Item from "./CartItem";
import { Modal } from "react-responsive-modal";

const Nav = ({ basket }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className="cart" onClick={onOpenModal}>
        View cart
      </button>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Your shopping cart</h2>
        {basket.map((cat, index) => {
          return <Item key={index} data={cat} />;
        })}
        <p>Thanks for giving these guys a home.</p>
      </Modal>
    </div>
  );
};

export default Nav;
