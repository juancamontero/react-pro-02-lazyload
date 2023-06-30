import { useEffect, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/productInterfaces';

interface useProductArgs {
  product: Product,
  onChange?: (args: onChangeArgs) => void,
  value?: number
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

  const [counter, setCounter] = useState(value);


  const onIncreaseBy = (value: number) => {

    const newValue = Math.max(counter + value, 0); //*Así nunca bajo de cero
    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  };
  useEffect(() => {
    setCounter(value)
  }, [value])

  return {
    counter,
    onIncreaseBy
  }
}