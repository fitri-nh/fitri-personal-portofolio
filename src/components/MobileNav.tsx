"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';
import { link } from "fs";

const Links = [
    {
        name: 'home',
        path: "/",
    },
    {
        name: 'project',
        path: "/project",
    },
    {
        name: 'services',
        path: "/services",
    },
    {
        name: 'resume',
        path: "/resume",
    },
];

const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-content">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href= "/">
                        <h1 className="text-4xl font-semibold">Fitri<span className="text-accent">.</span></h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {Links.map((link, index) => {
                        return (
                            <Link 
                                href={link.path} key={index} className={'${link.path === pathname && "text-accent border-b-2 border-accent} text-xl capitalize hover:text-accent transition-all'}> 
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
