// import {ProductCard, ProductButtons,  ProductImage, ProductTitle } from "../components";

import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";

import "../styles/custom-styles.css";

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
        <ProductCard
          product={product}
          className="bg-dark"
          style={{ backgroundColor: "#70d1f8" }}
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-btns" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image img="./coffee-mug.png" className="custom-image" />
          <ProductCard.Title title="Panki" />
          <ProductCard.Buttons className="custom-btns" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image img="./coffee-mug.png" className="custom-image" />
          <ProductCard.Title title="Panki" className="text-white"/>
          <ProductCard.Buttons
            className="custom-btns"
            style={{ display: "flex", justifyContent: "flex-end" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
