import { products } from "@/core";
import { ProductItem } from "./product-item";
import { ProductNotFound } from "./product-not-found";

export default function ProductsList () {
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
