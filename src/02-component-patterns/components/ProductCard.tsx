import { ReactElement, createContext } from "react";

import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/productInterfaces";

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, onIncreaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, onIncreaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
