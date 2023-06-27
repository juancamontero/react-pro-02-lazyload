import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img, className, style }: Props) => {
  const imgSrc = img ? img : useContext(ProductContext).product.img;
  const altText = !imgSrc
    ? "no image icon"
    : useContext(ProductContext).product.title;

  return (
    <img
      className={` ${styles.productImg} ${className}`}
      src={imgSrc ? imgSrc : noImage}
      alt={altText}
      style={style}
    />
  );
};
