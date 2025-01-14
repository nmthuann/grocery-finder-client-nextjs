"use client";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import { Button } from "@nextui-org/react";
import { AlignJustify } from "lucide-react";
import { Sidebar } from "./sidebar";
import { useEffect, useState } from "react";
import { Category } from "@/types/products.type";
import { SideNavItem } from "@/types/ui.type";
import { createMenuFromLeftRight } from "@/lib/generate-side-navbar";

interface SidebarSheetProps {
    categories: Category[];
}

export const SidebarSheet: React.FC<SidebarSheetProps> = ({ categories }) => {
    const [items, setItems] = useState<SideNavItem[]>([]);
    useEffect(() => {
        const convertedItems = createMenuFromLeftRight(categories);
        setItems(convertedItems);
    }, [categories]);

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button isIconOnly className="dark:bg-slate-950 bg-white">
                    <AlignJustify />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-80" side="left">
                <SheetHeader>
                    <SheetTitle>Danh mục cửa hàng</SheetTitle>
                </SheetHeader>
                <Sidebar items={items} />
            </SheetContent>
        </Sheet>
    );
};
