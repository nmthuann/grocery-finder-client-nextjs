"use client";
import { Link as LinkNextUI } from "@nextui-org/react";

import { usePathname } from "next/navigation";

const NavbarRouter = () => {
    const pathname = usePathname();

    const routes = [
        {
            href: `/`,
            active: pathname === `/`,
            label: "Trang chủ",
        },
        {
            href: `/danh-muc`,
            active: pathname === `/danh-muc`,
            label: "Danh mục",
        },

        {
            href: "/faq",
            active: pathname === `/faq`,
            label: "Hỏi Đáp",
        },

        {
            href: "/policy",
            active: pathname === `/policy`,
            label: "Chính sách",
        },
        {
            href: `/about`,
            active: pathname === `/about`,
            label: "Về Chúng Tôi",
        },
    ];

    return (
        <nav className="flex gap-8">
            {routes.map((route) => (
                <LinkNextUI
                    href={route.href}
                    key={route.href}
                    className={`${
                        route.active
                            ? "text-green-500 border-b-4 border-[#64ff4c]"
                            : ""
                    } capitalize font-medium hover:dark:text-[#64ff4c] hover:text-[#64ff4c] transition-all 
                            text-slate-600 dark:text-white`}
                >
                    {route.label}
                </LinkNextUI>
            ))}
        </nav>
    );
};

export default NavbarRouter;
