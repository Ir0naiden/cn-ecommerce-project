import React from "react";
import { Modal } from "react-responsive-modal";

class Nav extends React.Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button className="cart" onClick={this.onOpenModal}>
          View cart
        </button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Your shopping cart</h2>
          <p>Buy these f**king cats, we're sick of the sight of them.</p>
        </Modal>
      </div>
    );
  }
}

export default Nav;
