"use client";

import { SideNavItem } from "@/types/ui.type";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { FC, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface SideNavBarMenuProps {
    item: SideNavItem;
    // onCategorySelect: (category: SideNavItem) => void;
}

export const SideNavBarMenu: FC<SideNavBarMenuProps> = ({
    item
    // onCategorySelect
}) => {
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
                    // onCategorySelect(item);
                }}
                className={`
                    flex items-center 
                    p-2 rounded-lg w-full justify-between
                    hover:bg-slate-600 hover:dark:bg-slate-400 ${
                        pathname.includes(item.path) ? "dark:bg-slate-700" : ""
                    }`}
            >
                <span className="font-semibold text-sm  whitespace-nowrap overflow-hidden text-ellipsis max-w-56">
                    {item.categoryName}
                </span>
                <div className={`${subMenuOpen ? "rotate-180" : ""} flex`}>
                    <Icon icon="lucide:chevron-down" width="18" height="18" />
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
