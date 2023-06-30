
import { ProductCard } from "../components";
import { products } from "../data/products";

import "../styles/custom-styles.css";
import { useShoppingCart } from "../hooks/useShoppingCart";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
        {products.map((prod) => (
          <ProductCard
            key={prod.id}
            product={prod}
            className="bg-dark"
            onChange={onProductCountChange}
            value={shoppingCart[`${prod.id}`]?.count || 0}
          >
            <ProductCard.Image className="custom-image" />
            <ProductCard.Title className="text-white text-bold" />
            <ProductCard.Buttons className="custom-btns" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        <h2>Shopping Cart</h2>
        <hr />
        {Object.entries(shoppingCart).map(([key, productInCart]) => (
          <ProductCard
            key={key}
            product={productInCart}
            className=""
            style={{ width: "100px", marginBottom: "12px" }}
            value={productInCart.count}
            onChange={onProductCountChange}
          >
            <ProductCard.Title
              title={`QTY: ${productInCart.count}`}
              style={{ fontSize: "10px" }}
            />
            <ProductCard.Image className="custom-image" />
            <ProductCard.Buttons
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
