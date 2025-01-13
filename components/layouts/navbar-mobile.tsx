"use client";
import {
    Badge,
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    Tooltip,
    useDisclosure
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import AuthenticationModal from "../modules/auth/auth-modal";
import { useAuthContext } from "@/providers/auth-provider";
import { ShoppingCart, User2Icon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SidebarSheet } from "@/components/layouts/sidebar-sheet";
import { Category } from "@/types/products.type";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { UserAction } from "./user-action";
import { SearchDialog } from "../modules/search/search-mobile";

interface NavbarMobileComponentProps {
    location: Location[];
    categories: Category[];
}

export const NavbarMobileComponent: React.FC<NavbarMobileComponentProps> = ({
    location,
    categories
}) => {
    const { user } = useAuthContext();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Navbar isBordered>
            <NavbarContent>
                <SidebarSheet categories={categories} />
                <NavbarBrand>
                    <Link href="/" className="flex items-center">
                        <h1 className="font-Inter text-xs cursor-pointer ">
                            Tạp Hóa{" "}
                            <span className="text-[#64ff4c] ml-1 font-semibold">
                                Tân Hiệp
                            </span>
                        </h1>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify="end" className="gap-2">
                <Badge
                    content={cart.items.length}
                    shape="circle"
                    color="danger"
                    className="dark:border-white border-slate-900"
                >
                    <Button
                        radius="full"
                        isIconOnly
                        aria-label="more than 99 notifications"
                        variant="light"
                        className="font-bold rounded-full dark:text-white text-slate-800 border-3 
                    dark:bg-slate-900 bg-white  dark:border-slate-400"
                        onPress={() => router.push("/cart")}
                    >
                        <ShoppingCart
                            size={18}
                            className="text-slate-800 dark:text-slate-400"
                        />
                    </Button>
                </Badge>
                <SearchDialog />

                {user ? (
                    <UserAction user={user} />
                ) : (
                    <div>
                        <Tooltip
                            content="Đăng nhập/ Đăng ký"
                            placement="bottom"
                        >
                            <Button
                                onPress={onOpen}
                                className="font-bold rounded-full dark:text-white text-slate-800 border-3 
                    dark:bg-slate-900 bg-white  dark:border-slate-400"
                                variant="light"
                                isIconOnly
                                aria-label="Login"
                            >
                                <User2Icon
                                    className="text-slate-800 dark:text-slate-400"
                                    size={18}
                                />
                            </Button>
                        </Tooltip>

                        <AuthenticationModal
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            location={location}
                        />
                    </div>
                )}
                <ThemeToggle />
            </NavbarContent>
        </Navbar>
    );
};
export default NavbarMobileComponent;
