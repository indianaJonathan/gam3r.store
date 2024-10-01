import type { Product } from "@/core";
import Tag from "../shared/tag";
import { IconTag } from "@tabler/icons-react";

interface SpecificationsProps {
    product: Product
}

export default function ProductSpecifications (props: SpecificationsProps) {
    const { product } = props;
    return (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-3">
                <Tag label={product.specifications.highlight} icon={IconTag} />
            </div>
            {product.specifications && (
                Object.keys(product.specifications)
                    .filter((k) => k !== "highlight")
                    .map((key) => (
                        <div key={key} className="flex gap-1">
                            <span className="p-2 w-1/3 bg-white/5 rounded">
                                {key}
                            </span>
                            <span className="p-2 w-1/3 bg-white/5 rounded flex-1">
                                {product.specifications[key]}
                            </span>
                        </div>
                    ))
            )}
        </div>
    )
}
