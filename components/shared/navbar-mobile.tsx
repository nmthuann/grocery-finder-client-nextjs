"use client";
import {
    Badge,
    Button,
    Link,
    Navbar,
    NavbarBrand,
    NavbarContent,
    Tooltip,
    useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import AuthenticationModal from "../auth/authentication-modal";
import UserAction from "./user-action";
import { useAuthContext } from "@/providers/auth-provider";
import { ShoppingCart, User2Icon } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { SearchDialog } from "../customs/search/search-mobile";
import { SidebarSheet } from "@/app/components/sidebar-sheet";
import { Category } from "@/types/products.type";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";

interface NavbarMobileComponentProps {
    location: Location[];
    categories: Category[];
}

export const NavbarMobileComponent: React.FC<NavbarMobileComponentProps> = ({
    location,
    categories,
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
                >
                    <Button
                        radius="full"
                        isIconOnly
                        aria-label="more than 99 notifications"
                        variant="light"
                        size="sm"
                        onClick={() => router.push("/cart")}
                    >
                        <ShoppingCart size={20} />
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
                                color="secondary"
                                className="font-bold rounded-full dark:text-white "
                                variant="shadow"
                                isIconOnly
                                aria-label="Login"
                            >
                                <User2Icon size={20} />
                            </Button>
                        </Tooltip>
                        <AuthenticationModal
                            isOpen={isOpen}
                            onOpenChange={onOpenChange}
                            location={location}
                            size="xs"
                        />
                    </div>
                )}
                <ThemeToggle />
            </NavbarContent>
        </Navbar>
    );
};
export default NavbarMobileComponent;
