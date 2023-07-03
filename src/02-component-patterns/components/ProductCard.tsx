import { ReactElement, createContext } from "react";

import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

import {
  InitialValues,
  onChangeArgs,
  Product,
  ProductCardHandlers,
  ProductContextProps,
} from "../interfaces/productInterfaces";

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
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
  initialValues,
}: Props) => {
  const { counter, onIncreaseBy, maxCount ,isMaxReached , reset} = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ counter, onIncreaseBy, product, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          maxCount,
          isMaxReached,
          product,
          
          reset,
          onIncreaseBy,
        })}
      </div>
    </Provider>
  );
};
