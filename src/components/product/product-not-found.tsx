import { IconDevicesPcOff } from "@tabler/icons-react";
import Link from "next/link";

interface ProductNotFoundProps {
    backButton?: boolean;
}

export function ProductNotFound({ backButton = true }: ProductNotFoundProps) {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-violet-300">
            <IconDevicesPcOff size={180} stroke={0.5} />
            <span className="text-violet-300 font-light">
                Produto não encontrado
            </span>
            {backButton && (
                <Link
                    className="button bg-violet-700 text-white mt-5 hover:bg-violet-600 transition-colors"
                    href="/"
                >
                    Voltar
                </Link>
            )}
        </div>
    );
}
