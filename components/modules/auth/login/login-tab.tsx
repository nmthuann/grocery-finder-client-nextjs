"use client";

import { Separator } from "@/components/ui/separator";

import { LoginForm } from "./login-form";
import { GoogleButton } from "../btn-google";

interface LoginTabProps {
    onPress: () => void;
    setSelected: (option: string) => void;
}

export const LoginTab: React.FC<LoginTabProps> = ({ onPress, setSelected }) => {
    return (
        <div className="w-full">
            <LoginForm onPress={onPress} setSelected={setSelected} />
            <Separator className="mb-3 mt-3" />
            <GoogleButton option={true} />
        </div>
    );
};
