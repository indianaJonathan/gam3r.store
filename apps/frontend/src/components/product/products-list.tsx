"use client"

import { ProductItem } from "./product-item";
import { ProductNotFound } from "./product-not-found";
import useProducts from "@/data/hooks/useProducts";

export default function ProductsList () {
    const { products } = useProducts();

    return products.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 container">
            {products.map((product) => (
                <ProductItem
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    ) : (
        <ProductNotFound backButton={false} />
    );
}
