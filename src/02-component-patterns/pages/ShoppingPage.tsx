// import {ProductCard, ProductButtons,  ProductImage, ProductTitle } from "../components";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "CFG-MGU",
  title: "Coffee Mug - Code card",
  img: "",
  // img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title="" />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image img="./coffee-mug.png" />
          <ProductCard.Title title="Panki" />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
};
