import React, { useState } from "react";
import Card from "./Product";
import { Modal } from "react-responsive-modal";

const Nav = ({basket}) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => {
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  // const { open } = this.state;
  return (
    <div>
      <button className="cart" onClick={onOpenModal}>
        View cart
      </button>
      <Modal open={open} onClose={onCloseModal}>
        <h2>Your shopping cart</h2>
        {basket.map((cat, index) => {
          return <Card key={index} data={cat} />
        })}
        <p>Buy these f**king cats, we're sick of the sight of them.</p>
      </Modal>
    </div>
  );
};

export default Nav;
