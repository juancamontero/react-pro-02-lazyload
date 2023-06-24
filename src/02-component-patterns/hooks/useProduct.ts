import { useState } from 'react';
export const useProduct = () => { 

    const [counter, setCounter] = useState(0);

    const onIncreaseBy = (value: number) => {
      setCounter((prev) => Math.max(prev + value, 0)); //*Así nunca bajo de cero
    };

    return {
        counter,

        onIncreaseBy
    }
}