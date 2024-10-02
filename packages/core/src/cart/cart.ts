import { Product } from "../product";
import CartItem from "./cart-item";

export default class Cart {
    constructor(readonly items: CartItem[] = []) {}

    addItem(product: Product): Cart {
        const item = this.itemPerProduct(product)
        if (item) {
            return new Cart(this.updateItemQuantity(this.items, product, 1));
        } else {
            return new Cart([...this.items, { product, quantity: 1 }]);
        }
    }

    removeItem(product: Product): Cart {
        const item = this.itemPerProduct(product);
        if (!item) return this;

        return new Cart(this.updateItemQuantity(this.items, product, -1));
    }

    removeProduct(product: Product): Cart {
        const item = this.itemPerProduct(product);
        if (!item) return this;

        return new Cart(this.items.filter((item) => item.product.id !== product.id));
    }

    clear() {
        return new Cart();
    }
    get itemsQty() {
        return this.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);
    }

    get total() {
        return this.items
            .map((item) => item.product.promo * item.quantity)
            .reduce((a, b) => a + b, 0);
    }

    get fullTotal() {
        return this.items
            .map((item) => item.product.base * item.quantity)
            .reduce((a, b) => a + b, 0);
    }

    private itemPerProduct(product: Product): CartItem | undefined {
        return this.items.find((item) => item.product.id === product.id);
    }

    private updateItemQuantity(
        items: CartItem[],
        product: Product,
        diference: number
    ): CartItem[] {
        return items
            .map((i) =>
                i.product.id === product.id ? { ...i, quantity: i.quantity + diference } : i
            )
            .filter((i) => i.quantity > 0);
    }
}
