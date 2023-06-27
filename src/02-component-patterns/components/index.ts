import { ProductCard as ProductCardHOC } from './ProductCard'

export { ProductButtons } from './ProductButtons'
export { ProductImage } from './ProductImage'
export { ProductTitle } from './ProductTitle'

import { ProductButtons } from './ProductButtons'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductCardHOCProps } from '../interfaces/productInterfaces'

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Image: ProductImage,
    Buttons: ProductButtons,
    Title: ProductTitle
})