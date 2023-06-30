import { Product } from "../interfaces/productInterfaces";

const product1 = {
  id: "CFG-MGU",
  title: "Coffee Mug - Code card",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "CFG-MGU2",
  title: "Coffee Mug - Code meme",
  img: "./coffee-mug2.png",
};

export const products: Product[] = [product1, product2];