
import { Props as ProductCardProps } from "../components/ProductCard";

import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductImageProps } from '../components/ProductImage';
import { Props as ProductButtonsProps } from '../components/ProductButtons';

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface ProductContextProps {
    product: Product;
    counter: number;
    onIncreaseBy: (value: number) => void;
    maxCount?: number
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,
}

export interface onChangeArgs {
    product: Product;
    count: number;
}


export interface ProductInCart extends Product {
    count: number;
}

export interface InitialValues {
    count?: number,
    maxCount?: number;

}

export interface ProductCardHandlers {
    count: number,
    isMaxReached: boolean,
    maxCount?: number,
    product: Product

    onIncreaseBy: (value: number) => void;
    reset: () => void
}