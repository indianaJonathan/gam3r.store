"use client"

/* eslint-disable @typescript-eslint/no-explicit-any */
import CartItem from "@/components/checkout/cart/cart-item"
import CartTotal from "@/components/checkout/cart/cart-total"
import EmptyCart from "@/components/checkout/cart/empty-cart"
import CheckoutHeader from "@/components/checkout/checkout-header"
import useCart from "@/data/hooks/useCart"

export default function Page() {
    const { 
        items, 
        itemsAmount,
        total,
        addItem,
        removeItem,
        removeProduct,
    } = useCart()

    return (
        <div className="flex-1 flex flex-col gap-5 container">
            {items.length > 0 && <CheckoutHeader step="cart" /> }
            <div className="flex-1 flex flex-col gap-4">
                {items.length === 0 && <EmptyCart />}
                {items.map((item: any) => (
                    <CartItem
                        key={item.product.id}
                        item={item}
                        addItem={() => addItem(item.product)}
                        removeItem={() => removeItem(item.product)}
                        removeProduct={() => removeProduct(item.product)}
                    />
                ))}
                <CartTotal itemsAmount={itemsAmount} total={total} />
            </div>
        </div>
    )
}
