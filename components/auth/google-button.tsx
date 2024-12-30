"use client";
import { GoogleLogoIcon } from "../icons/google-logo-icon";
import { Button } from "../ui/button";

interface GoogleButtonProps {
    option: boolean;
}

export const GoogleButton: React.FC<GoogleButtonProps> = ({ option }) => {
    return (
        <Button
            className="
            bg-slate-50 dark:bg-slate-950 dark:text-white text-slate-800 
            hover:bg-gradient-to-r hover:from-lime-400 hover:to-green-600 hover:text-white dark:font-medium
            flex w-full justify-center gap-5 rounded-2xl px-4 py-4 text-sm font-semibold drop-shadow-md"
            onClick={() => {}}
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

export default GoogleButton;
