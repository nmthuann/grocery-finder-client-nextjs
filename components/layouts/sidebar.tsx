"use client";

import React, { useState } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SideNavItem } from "@/constants/constants";
import { Icon } from "@iconify/react";

import { Button, Link as LinkNextUI } from "@nextui-org/react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
    items: SideNavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <div className=" rounded-xl mb-5">
            <div className="flex flex-col h-full">
                <ScrollArea className="flex-1 overflow-auto rounded-md">
                    <Link
                        href="/"
                        className=" space-x-3 items-center 
                        justify-center md:justify-start md:px-6 border-b h-12 w-full "
                    >
                        <span className="font-bold text-lg hidden md:flex ">
                            Danh mục sản phẩm
                        </span>
                    </Link>

                    <div className="flex flex-col mt-4 space-y-2 md:px-6">
                        {items.map((item: SideNavItem) => (
                            <MenuItem key={item.categoryName} item={item} />
                        ))}
                    </div>
                    <div className="flex flex-col mt-2 space-y-4 p-2">
                        <LinkNextUI
                            href="/cart"
                            underline="focus"
                            size="lg"
                            color="warning"
                            className="font-semibold text-base "
                        >
                            Giỏ hàng của bạn
                        </LinkNextUI>
                        <LinkNextUI
                            href="/policy"
                            underline="focus"
                            size="lg"
                            className="font-semibold text-base"
                        >
                            Chính sách
                        </LinkNextUI>
                        <LinkNextUI
                            href="/about"
                            underline="focus"
                            size="lg"
                            className="font-semibold text-base"
                        >
                            Về chúng tôi
                        </LinkNextUI>
                        <LinkNextUI
                            href="/accounts"
                            underline="focus"
                            size="lg"
                            className="font-semibold text-base"
                        >
                            Xem cài đặt tài khoản
                        </LinkNextUI>
                    </div>
                </ScrollArea>
            </div>
        </div>
    );
};

const MenuItem = ({ item }: { item: SideNavItem }) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };
    return (
        <div>
            <Button
                variant="light"
                onPress={() => {
                    toggleSubMenu();
                }}
                className={`
                    flex items-center 
                    p-2 rounded-lg w-full justify-between
                    hover:bg-slate-600 hover:text-white hover:dark:bg-slate-400 ${
                        pathname.includes(item.path) ? "dark:bg-slate-700" : ""
                    }`}
            >
                <span className="font-semibold text-sm flex  whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.categoryName}
                </span>
                <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                    <Icon icon="lucide:chevron-down" width="20" height="20" />
                </div>
            </Button>

            {subMenuOpen && (
                <div className="my-2 ml-12 flex flex-col space-y-4">
                    {item.subMenuItems?.map((subItem) => (
                        <Link
                            key={subItem.categoryName}
                            href={subItem.path}
                            className={`${
                                subItem.path === pathname ? "font-bold" : ""
                            }`}
                        >
                            <span>{subItem.categoryName}</span>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};
