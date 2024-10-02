import Page from "@/components/template/page";
import type { ReactNode } from "react";

interface LayoutProps extends React.PropsWithChildren {
    children: ReactNode | ReactNode[];
}

export default function Layout (props: LayoutProps) {
    return (
        <Page>
            {props.children}
        </Page>
    );
}
