import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const imgSrc = img ? img : useContext(ProductContext).product.img;
  const altText = !imgSrc
    ? "no image icon"
    : useContext(ProductContext).product.title;

  return (
    <img
      className={styles.productImg}
      src={imgSrc ? imgSrc : noImage}
      alt={altText}
    />
  );
};
