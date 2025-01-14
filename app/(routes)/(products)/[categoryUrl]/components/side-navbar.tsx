"use client";

import React from "react";
import Link from "next/link";
import { Store } from "lucide-react";
import { ScrollShadow } from "@nextui-org/react";
import { SideNavItem } from "@/types/ui.type";
import { SideNavBarMenu } from "./side-navbar-menu";

interface SideNavBarProps {
    items: SideNavItem[];
    // onCategorySelect: (category: SideNavItem) => void;
}

export const SideNavBar: React.FC<SideNavBarProps> = ({
    items
    // onCategorySelect
}) => {
    return (
        <div className="w-80 h-[calc(100vh-10rem)] border rounded-xl p-2 m-2">
            <div className="flex flex-col h-full">
                <Link
                    href="/"
                    className="
                        flex flex-row space-x-3 items-center 
                        justify-center md:justify-start md:px-6 border-b h-12 w-full"
                >
                    <Store />
                    <span className="font-bold text-lg hidden md:flex">
                        Danh mục sản phẩm
                    </span>
                </Link>

                <ScrollShadow
                    hideScrollBar
                    className="flex-1 overflow-auto rounded-md"
                >
                    <div className="flex flex-col mt-4 space-y-2 md:px-6">
                        {items.map((item: SideNavItem) => (
                            <SideNavBarMenu
                                key={item.categoryName}
                                item={item}
                                // onCategorySelect={onCategorySelect}
                            />
                        ))}
                    </div>
                </ScrollShadow>
            </div>
        </div>
    );
};
