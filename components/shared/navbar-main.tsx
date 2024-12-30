"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo/logo-website-3.png";
import { useEffect, useState } from "react";
import NavbarRouter from "./navbar-router";
import NavbarActions from "./navbar-actions";
interface NavbarMainProps {
    location: Location[];
}
export const NavbarMain: React.FC<NavbarMainProps> = ({ location }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }
    return (
        <nav className="flex items-center justify-between pl-10 pr-10 bg-white dark:bg-gray-900 shadow-md">
            <div className="flex items-center">
                <Link href="/" className="flex items-center">
                    <Image src={logo} alt="logo" width={80} height={80} />
                    <h1 className="font-Inter text-md cursor-pointer mt-2">
                        Tạp Hóa{" "}
                        <span className="text-[#64ff4c] ml-1 font-bold">
                            Tân Hiệp
                        </span>
                    </h1>
                </Link>
            </div>
            <NavbarRouter />
            <div className="flex items-center">
                <NavbarActions location={location} />
            </div>
        </nav>
    );
};
