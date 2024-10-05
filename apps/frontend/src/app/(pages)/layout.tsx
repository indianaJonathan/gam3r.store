import Page from "@/components/template/page";
import { CartProvider } from "@/data/contexts/CartContext";
import { PaymentProvider } from "@/data/contexts/PaymentContext";
import { ProductProvider } from "@/data/contexts/ProductContext";
import type { ReactNode } from "react";

interface LayoutProps extends React.PropsWithChildren {
    children: ReactNode | ReactNode[];
}

export default function Layout (props: LayoutProps) {
    return (
        <ProductProvider>
            <CartProvider>
                <PaymentProvider>
                    <Page>
                        {props.children}
                    </Page>
                </PaymentProvider>
            </CartProvider>
        </ProductProvider>
    );
}
