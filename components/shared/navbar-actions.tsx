"use client";

import { ShoppingCart, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Badge, Button, Tooltip, useDisclosure } from "@nextui-org/react";
import AuthenticationModal from "../auth/authentication-modal";
import { useAuthContext } from "@/providers/auth-provider";
import { ThemeToggle } from "./theme-toggle";
import useCart from "@/hooks/use-cart";
import SearchComponent from "../customs/search/search-component";
import UserAction from "./user-action";

interface NavbarActionsProps {
    location: Location[];
}

export const NavbarActions: React.FC<NavbarActionsProps> = ({ location }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();
    const { user } = useAuthContext();
    if (!isMounted) {
        return null;
    }

    return (
        <div
            className="flex flex-col items-center space-y-4 lg:space-y-0 
        lg:flex-row lg:items-center lg:space-x-4 lg:px-4 lg:py-2 lg:order-2 text-base"
        >
            <SearchComponent />

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
                        size={24}
                        className="text-slate-800 dark:text-slate-400"
                    />
                </Button>
            </Badge>

            {user ? (
                <UserAction user={user} />
            ) : (
                <div>
                    <Tooltip content="Đăng nhập/ Đăng ký" placement="bottom">
                        <Button
                            onPress={onOpen}
                            className="font-bold rounded-full dark:text-white text-slate-800 border-3 
                    dark:bg-slate-900 bg-white  dark:border-slate-400"
                            variant="light"
                            isIconOnly
                            aria-label="Login"
                        >
                            <User2Icon className="text-slate-800 dark:text-slate-400" />
                        </Button>
                    </Tooltip>

                    <AuthenticationModal
                        isOpen={isOpen}
                        onOpenChange={onOpenChange}
                        location={location}
                        size="md"
                    />
                </div>
            )}
            <ThemeToggle />
        </div>
    );
};

export default NavbarActions;
