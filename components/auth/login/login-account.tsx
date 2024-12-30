"use client";
import GoogleButton from "@/components/auth/google-button";
import { Separator } from "@/components/ui/separator";

import { LoginForm } from "./login-form";

interface LoginAccountProps {
    onPress: () => void;
    setSelected: (option: string) => void;
    isLoading: boolean;
}

export const LoginAccount: React.FC<LoginAccountProps> = ({
    onPress,
    setSelected,
    isLoading,
}) => {
    return (
        <div className="w-full">
            <LoginForm
                onPress={onPress}
                setSelected={setSelected}
                isLoading={isLoading}
            />

            <Separator className="mb-3 mt-3" />
            <GoogleButton option={true} />
        </div>
    );
};
