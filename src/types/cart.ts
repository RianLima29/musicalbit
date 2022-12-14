import { Product } from "./product";

export interface Cart {
    items: CartProduct[] 
}


export interface CartProduct extends Product {
    quantity: number
}



