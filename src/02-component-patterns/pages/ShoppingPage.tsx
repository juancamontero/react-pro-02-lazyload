import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark"
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, count, isMaxReached, onIncreaseBy , maxCount}) => (
            <>
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white text-bold" />
              <ProductButtons className="custom-btns" />

              <button onClick={reset}>RESET</button>
              <hr />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <button onClick={() => onIncreaseBy(-2)}>-2</button>
                <span>{count} -max- {maxCount}</span>
                {!isMaxReached && (
                  <button onClick={() => onIncreaseBy(2)}>+2</button>
                )}
              </div>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
