"use client";

import { usePathname } from "next/navigation";
import { $Container, $Nav, $Link } from "./navigation.styled";

interface INavigationLink {
    id: string;
    title: string;
    path: string;
}

const navigation: INavigationLink[] = [
    { id: '1', title: 'Home', path: '/' },
    { id: '2', title: 'Details', path: '/details' },
];

export const Navigation = () => {
    const pathname = usePathname();

    return (
        <$Container>
            <$Nav>
                {navigation.map(({ id, title, path }) => (
                    <$Link
                        key={id}
                        href={path}
                        isActive={pathname === path}
                    >
                        {title}
                    </$Link>
                ))}
            </$Nav>
        </$Container>
    );
}
