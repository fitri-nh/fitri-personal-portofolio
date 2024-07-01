"use client";

import { Console } from "console";
import Link from "next/link";
import { usePathname } from "next/navigation"

const link = [
    {
        name: 'home',
        path: "/",
    },
    {
        name: "project",
        path: "/project",
    },
    {
        name: "services", /*resume*/
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
];

const Nav =() => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <nav className="flex gap-8">
            {link.map((link, index)=> {
                return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}</Link>
            })}
        </nav>
    )
}

export default Nav