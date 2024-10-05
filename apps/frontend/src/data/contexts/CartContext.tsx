/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import {
    CalcInstallment,
    Cart,
    CartItem,
    Installment,
    Product,
} from '@gstore/core'
import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export interface CartContextProps {
    items: CartItem[]
    itemsAmount: number
    fullTotal: number
    total: number
    installment: Installment
    addItem: (product: Product) => void
    removeItem: (product: Product) => void
    removeProduct: (product: Product) => void
    clearCart: () => void
}

const CartContext = createContext<CartContextProps>({} as any)

export function CartProvider(props: any) {
    const { save, get } = useLocalStorage()
    const [cart, setCart] = useState<Cart>(new Cart())

    function addItem(product: Product) {
        updateCart(cart.addItem(product))
    }

    function removeItem(product: Product) {
        updateCart(cart.removeItem(product))
    }

    function removeProduct(product: Product) {
        updateCart(cart.removeProduct(product))
    }

    function clearCart() {
        updateCart(cart.clear())
    }

    function updateCart(cart: Cart) {
        save('cart', cart.items)
        setCart(cart)
    }

    useEffect(() => {
        const savedItems: CartItem[] = get('cart')
        if (savedItems) setCart(new Cart(savedItems))
    }, [get])

    return (
        <CartContext.Provider
            value={{
                items: cart.items,
                itemsAmount: cart.itemsQty,
                total: cart.total,
                fullTotal: cart.fullTotal,
                installment: new CalcInstallment().exec(
                    cart.total,
                ),
                addItem,
                removeItem,
                removeProduct,
                clearCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext
