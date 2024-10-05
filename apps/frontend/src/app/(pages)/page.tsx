import ProductFilter from "@/components/product/product-filter";
import ProductsList from "@/components/product/products-list";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col container gap-5 py-10">
      <ProductFilter />
      <ProductsList />
    </div>
  );
}
