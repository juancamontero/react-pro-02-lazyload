import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

import { createContext,  } from "react";

import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/productInterfaces";

import { ProductImage, ProductTitle, ProductButtons } from "./";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, onIncreaseBy } = useProduct();

  return (
    <Provider value={{ counter, onIncreaseBy, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
