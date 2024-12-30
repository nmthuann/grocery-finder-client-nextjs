"use client";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Link as LinkNextUI,
} from "@nextui-org/react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import SoftDrink from "../../public/categories/soft-drink.png";
import CookingOil from "../../public/categories/oil.png";
import PersonalHygeine from "../../public/categories/amenities.png";
import HouseCleaning from "../../public/categories/cleaning.png";
import CandySnack from "../../public/categories/snack.png";
import Noodles from "../../public/categories/instant-noodles.png";
import Milk from "../../public/categories/milk-carton.png";

const NavbarRouter = () => {
    const pathname = usePathname();

    const routes = [
        {
            href: `/`,
            active: pathname === `/`,
            label: "Trang chủ",
        },
        {
            href: `/#`,
            active: pathname === `/danh-muc-san-pham`,
            label: "Danh mục",
        },

        {
            href: "/faq",
            active: pathname === `/fag`,
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
    const icons = {
        chevron: <ChevronDown size={16} />,
        cookingOil: (
            <Image src={CookingOil} alt="logo" width={24} height={24} />
        ),
        softDrink: <Image src={SoftDrink} alt="logo" width={24} height={24} />,
        personalHygeine: (
            <Image src={PersonalHygeine} alt="logo" width={24} height={24} />
        ),
        houseCleaning: (
            <Image src={HouseCleaning} alt="logo" width={24} height={24} />
        ),
        candySnack: (
            <Image src={CandySnack} alt="logo" width={24} height={24} />
        ),
        noodles: <Image src={Noodles} alt="logo" width={24} height={24} />,

        milk: <Image src={Milk} alt="logo" width={24} height={24} />,
    };

    return (
        <nav className="flex gap-8">
            {routes.map((route) => {
                if (route.label === "Danh mục") {
                    return (
                        <LinkNextUI isBlock key={route.href} color="foreground">
                            <Dropdown key={route.href} backdrop="blur">
                                <DropdownTrigger>
                                    <Button
                                        className="flex text-base text-slate-600 dark:text-white font-medium"
                                        endContent={icons.chevron}
                                        radius="sm"
                                        variant="light"
                                    >
                                        {route.label}
                                    </Button>
                                </DropdownTrigger>

                                <DropdownMenu
                                    aria-label="Grocery features"
                                    className="w-[340px]"
                                    itemClasses={{
                                        base: "gap-4",
                                    }}
                                >
                                    <DropdownItem
                                        key="autoscaling"
                                        startContent={icons.cookingOil}
                                        href="/dau-an"
                                    >
                                        Dầu ăn
                                    </DropdownItem>
                                    <DropdownItem
                                        key="usage_metrics"
                                        startContent={icons.softDrink}
                                        href="/bia"
                                    >
                                        Nước giải khát
                                    </DropdownItem>
                                    <DropdownItem
                                        key="production_ready"
                                        startContent={icons.noodles}
                                        href="/mi"
                                    >
                                        Mì, Phở Bún
                                    </DropdownItem>
                                    <DropdownItem
                                        key="99_uptime"
                                        startContent={icons.candySnack}
                                        href="/snack"
                                    >
                                        Bánh Kẹo
                                    </DropdownItem>
                                    <DropdownItem
                                        key="supreme_support"
                                        startContent={icons.milk}
                                        href="/sua-tuoi"
                                    >
                                        Sữa, Bơ Kem
                                    </DropdownItem>
                                    <DropdownItem
                                        key="supreme_support"
                                        startContent={icons.personalHygeine}
                                        href="/dau-goi"
                                    >
                                        Chăm sóc cá nhân
                                    </DropdownItem>
                                    <DropdownItem
                                        key="supreme_support"
                                        startContent={icons.houseCleaning}
                                        href="/nuoc-rua-chen"
                                    >
                                        Vệ Sinh Nhà Cửa
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </LinkNextUI>
                    );
                } else {
                    return (
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
                    );
                }
            })}
        </nav>
    );
};

export default NavbarRouter;
