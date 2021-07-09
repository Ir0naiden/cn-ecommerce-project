import React, { useState, useEffect } from "react";
import Cat from "./CatImageAPI";
import Button from "./Button";
import CatName from "./CatName";
import Description from "./Description";
import CatPrice from "./CatPrice";
import ReactCardFlip from 'react-card-flip';

const Product = ({ data, handleAdd }) => {
  return (
    <div class="scene">
      <div class="card">
        <div class="card__face--front">
          <Cat url={data.url} />
          <CatName catName={data.name} />
        </div>
        <div class="card__face--back">
          <CatPrice catPrice={data.price}/>
          <Description catDesc={data.description} />
          <Button func={() => handleAdd(data)} />
        </div>
      </div>
    </div>
  );
};

export default Product;

// class Product extends React.Component {
//   constructor() {
//     super();
//       this.state = {
//       isFlipped: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     e.preventDefault();
//     this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
//   }

//   render() {
//     return (
//       <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
//         <div class="card__face--front" onClick={this.handleClick}>
//           <Cat url={data.url} />
//           <CatName catName={data.name} />
//           <button onClick={this.handleClick}>Click to flip</button>
//         </div>

//         <div class="card__face--back" onClick={this.handleClick}>
//           <CatPrice catPrice={data.price} />
//           <Description catDesc={data.description} />
//           <Button func={() => handleAdd(data)} />
//           <button onClick={this.handleClick}>Click to flip</button>
//         </div>
//       </ReactCardFlip>
//     )
//   }
// }

// export default Product;
