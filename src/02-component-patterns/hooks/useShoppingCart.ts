import { useState } from "react";
import { ProductInCart, Product } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<{
        [key: string]: ProductInCart;
    }>({});
    const onProductCountChange = ({
        count,
        product,
    }: {
        count: number;
        product: Product;
    }) => {
        setShoppingCart((oldShoppingCart) => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || {
                ...product,
                count: 0,
            }; // * si no existe lo creo con qty=0

            // * si el producto tiene existencias
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart,
                };
            }

            // * Borrar si qty <=0
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            // if (count === 0) {
            //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            //   console.log(toDelete);

            //   return rest;
            // }

            // return {
            //   ...oldShoppingCart,
            //   [product.id]: { ...product, count },
            // };
        });
    };

    return {
        shoppingCart,
        onProductCountChange
    }
}