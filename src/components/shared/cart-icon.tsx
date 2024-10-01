import { IconShoppingCart } from "@tabler/icons-react";

export interface CartIconProps {
    amount: number;
}

export default function CartIcon({ amount }: CartIconProps) {
    return (
        <div className="flex justify-center items-center rounded-full size-10 bg-violet-dark relative">
            <IconShoppingCart size={20} stroke={1.3} />
            <div className="absolute top-1 right-1 bg-pink-500 text-white text-xs font-semibold rounded-full size-4 flex items-center justify-center">
                <span className="text-xs">{amount ?? 0}</span>
            </div>
        </div>
    );
}
