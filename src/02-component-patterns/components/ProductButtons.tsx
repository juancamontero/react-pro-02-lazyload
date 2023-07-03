import { useCallback, useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, onIncreaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  return (
    <div style={style} className={` ${styles.buttonsContainer} ${className} `}>
      <button onClick={() => onIncreaseBy(-1)} className={styles.buttonMinus}>
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => onIncreaseBy(1)}
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
      >
        +
      </button>
    </div>
  );
};
