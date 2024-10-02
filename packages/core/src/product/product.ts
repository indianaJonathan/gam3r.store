import type Priceble from "./priceble";
import type Specifications from "./specifications";

export default interface Product extends Priceble {
    id: number;
    name: string;
    description: string;
    brand: string;
    model: string;
    image: string;
    review: string;
    score: number;
    tags: string[];
    specifications: Specifications;
}
