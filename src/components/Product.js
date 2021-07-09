import Cat from "./CatImageAPI";
import Button from "./Button";
import CatName from "./CatName";
import Description from "./Description";
import CatPrice from "./CatPrice";

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

export default Product;
