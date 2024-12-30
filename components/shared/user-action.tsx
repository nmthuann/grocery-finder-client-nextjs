"use client";
import { useAuthContext } from "@/providers/auth-provider";
import { User } from "@/types/users.type";
import {
    Avatar,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import axios from "axios";
import { CircleHelp, Heart, LogOut, MapPin, Package } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface UserActionProps {
    user: User;
}

export const UserAction: React.FC<UserActionProps> = ({ user }) => {
    const [isMounted, setIsMounted] = useState(false);
    const { handleLogout } = useAuthContext();
    const router = useRouter();
    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null; // Avoid rendering on server
    }

    if (!user) {
        return null;
    }

    async function handleOnClickLogout() {
        try {
            const res = await axios.post("/api/auth/logout");
            toast.success(res.data.message);
            handleLogout();
            router.push("/");
        } catch (error) {
            toast.error("Đăng xuất thất bại.");
        }
    }

    const iconClasses =
        "text-xl text-default-500 pointer-events-none flex-shrink-0";

    return (
        <Dropdown
            placement="bottom-end"
            className="bg-slate-50 dark:bg-slate-950"
        >
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    color="default"
                    size="sm"
                    className="transition-transform dark:bg-slate-800"
                    src={user.avatarUrl}
                    showFallback
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="introduce" className="h-14 gap-0">
                    <p className="font-semibold">Chào, {user.firstName}</p>
                </DropdownItem>
                <DropdownItem key="accounts" href="/accounts">
                    Thông tin các nhân
                </DropdownItem>
                <DropdownItem
                    key="order"
                    href="/accounts/orders"
                    startContent={<Package className={iconClasses} />}
                >
                    Đơn hàng của tôi
                </DropdownItem>
                <DropdownItem
                    key="address"
                    href="/accounts/address"
                    startContent={<MapPin className={iconClasses} />}
                >
                    Địa chỉ giao hàng
                </DropdownItem>

                <DropdownItem
                    key="member"
                    href="/accounts/members"
                    startContent={<Heart className={iconClasses} />}
                >
                    Khách hàng thân thiết
                </DropdownItem>
                <DropdownItem
                    key="help_and_feedback"
                    href="/helps"
                    startContent={<CircleHelp className={iconClasses} />}
                >
                    phản hồi & trợ giúp
                </DropdownItem>
                <DropdownItem
                    key="logout"
                    color="danger"
                    onPress={handleOnClickLogout}
                    startContent={<LogOut className={iconClasses} />}
                >
                    Đăng xuất
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default UserAction;
