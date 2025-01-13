"use client";
import { Button } from "@nextui-org/react";
import { GoogleLogoIcon } from "../../icons/google-logo-icon";

interface GoogleButtonProps {
    option: boolean;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ option }) => {
    return (
        <Button
            className="
            bg-white dark:bg-[#18181B]
            hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-600 hover:text-white dark:font-medium
            flex w-full justify-center gap-5 rounded-2xl px-4 py-4 text-sm font-semibold drop-shadow-md"
            onPress={() => console.log("btn Google clicked!")}
        >
            <GoogleLogoIcon />
            {option ? (
                <div>Đăng nhập với Google</div>
            ) : (
                <div>Tiếp tục với Google</div>
            )}
        </Button>
    );
};
