const Button = ({ func }) => {
    return (
      <div>
        <button className="addToBasket" onClick={func}>Add to basket</button>
      </div>
    );
  };
  
  export default Button;