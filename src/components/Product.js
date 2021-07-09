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
        <div class="card__face card__face--front">
          <Cat url={data.url} />
          <CatName catName={data.name} />
        </div>
        <div class="card__face card__face--back">
          <CatPrice catPrice={data.price} />
          <Description catDesc={data.description} />
          <Button func={() => handleAdd(data)} />
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
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
//         <YOUR_FRONT_CCOMPONENT>
//           <Cat url={data.url} />
//           <CatName catName={data.name} />
//           <button onClick={this.handleClick}>Click to flip</button>
//         </YOUR_FRONT_CCOMPONENT>

//         <YOUR_BACK_COMPONENT>
//           <CatPrice catPrice={data.price} />
//           <Description catDesc={data.description} />
//           <Button func={() => handleAdd(data)} />
//           <button onClick={this.handleClick}>Click to flip</button>
//         </YOUR_BACK_COMPONENT>
//       </ReactCardFlip>
//     )
//   }
// }

export default Product;
