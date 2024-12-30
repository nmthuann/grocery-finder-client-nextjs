"use client";

import { ShoppingCart, User2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Badge, Button, Tooltip, useDisclosure } from "@nextui-org/react";
import AuthenticationModal from "../auth/authentication-modal";
import UserAction from "./user-action";
import { useAuthContext } from "@/providers/auth-provider";
import { ThemeToggle } from "./theme-toggle";
import useCart from "@/hooks/use-cart";
import SearchComponent from "../customs/search/search-component";

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

            <Badge content={cart.items.length} shape="circle" color="danger">
                <Button
                    radius="full"
                    isIconOnly
                    aria-label="more than 99 notifications"
                    variant="light"
                    onClick={() => router.push("/cart")}
                >
                    <ShoppingCart size={24} />
                </Button>
            </Badge>

            {user ? (
                <UserAction user={user} />
            ) : (
                <div>
                    <Tooltip content="Đăng nhập/ Đăng ký" placement="bottom">
                        <Button
                            onPress={onOpen}
                            color="secondary"
                            className="font-bold rounded-full dark:text-white "
                            variant="shadow"
                            isIconOnly
                            aria-label="Login"
                        >
                            <User2Icon />
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
