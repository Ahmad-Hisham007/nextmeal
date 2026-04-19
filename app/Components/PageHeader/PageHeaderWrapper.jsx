"use client";
import { usePathname } from "next/navigation";
import PageHeader from "./PageHeader";


export default function PageHeaderWrapper({ title, subtitle, bgImage }) {
    const pathname = usePathname();

    const hideHeaderOn = ["/", "/login", "/register"];

    const shouldHide = hideHeaderOn.includes(pathname);

    if (shouldHide) return null;



    return (
        <PageHeader
            title={title}
            subtitle={subtitle}
            bgImage={bgImage}
        />
    );
}