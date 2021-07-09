import React, { useState, useEffect } from "react";
import Cat from "./CatImageAPI";
import Button from "./Button";
import CatName from "./CatName";
import CatPrice from "./CatPrice";

const CartItem = ({ data, handleAdd }) => {
  return (
    <div className="cartItem">
        <div className="cartLeft">
          <Cat url={data.url} />
        </div>
        <div className="cartRight">
          <CatName catName={data.name} />
          <CatPrice catPrice={data.price} />
          {/* <Button func={() => handleAdd(data)} /> */}
        </div>
    </div>
  );
};

export default CartItem;
