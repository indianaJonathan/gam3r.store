import type { Product } from "@gstore/core";

interface ProductTitleProps {
    product: Product
}

export default function ProductTitle (props: ProductTitleProps) {
    const { product } = props;

    return (
        <div className="flex flex-col">
            <span className="text-2xl">
                {product.name}
            </span>
            <span className="font-light text-zinc-400">
                {product.description}
            </span>
        </div>
    );
}
