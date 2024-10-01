/* eslint-disable @typescript-eslint/no-explicit-any */
import BuyBanner from "@/components/product/buy-banner";
import ProductInfo from "@/components/product/product-info";
import { ProductNotFound } from "@/components/product/product-not-found";
import ProductTitle from "@/components/product/product-title";
import { products } from "@/core";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function ProductPage(props: any) {
    const id = +props.params.id;

    const product = products.find((p) => p.id === id);

    return product ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <ProductTitle product={product} />
                <ProductInfo product={product}/>
                <BuyBanner product={product} />
            </div>
        </div>
    ) : (
        <ProductNotFound />
    );
}
