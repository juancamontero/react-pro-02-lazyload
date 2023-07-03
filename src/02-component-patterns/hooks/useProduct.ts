import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/productInterfaces';

interface useProductArgs {
  product: Product,
  onChange?: (args: onChangeArgs) => void,
  value?: number
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false)



  const onIncreaseBy = (value: number) => {

    let newValue = Math.max(counter + value, 0)
    if (initialValues?.maxCount) {
      newValue = Math.min(initialValues.maxCount, newValue)
    }

    setCounter(newValue)

    onChange && onChange({ count: newValue, product })
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }

  useEffect(() => {
    if (!isMounted.current) return
    setCounter(value)
  }, [value])

  useEffect(() => {
    isMounted.current = true
  }, [])



  return {
    counter,
    isMaxReached: !!initialValues?.maxCount && counter === initialValues.maxCount,
    maxCount: initialValues?.maxCount,

    onIncreaseBy,
    reset,
  }
}