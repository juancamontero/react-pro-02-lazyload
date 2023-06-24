import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title = "" }) => {
    return (
      <span className={styles.productDescription}>
        {title ? title : useContext(ProductContext).product.title}
      </span>
    );
  };