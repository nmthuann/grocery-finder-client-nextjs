"use client";
import { useState } from "react";
import { InputOtpForm } from "./input-otp-form";
import { VerifyEmailForm } from "./verify-email-form";
import { Separator } from "@/components/ui/separator";
import GoogleButton from "@/components/auth/google-button";
import { CreateUserForm } from "./create-user-form";

interface RegisterAccountProps {
    onPress: () => void;
    setSelected: (option: string) => void;
    isLoading: boolean;
    location: ILocation[];
}

export const RegisterAccount: React.FC<RegisterAccountProps> = ({
    onPress,
    setSelected,
    isLoading,
    location,
}) => {
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [otpSucceeded, setOtpSucceeded] = useState(false);
    const [emailValid, setEmailValid] = useState<string>("");

    const handleEmailConfirmation = () => {
        setEmailConfirmed(true);
    };
    const handleSendOtpSucceeded = () => {
        setOtpSucceeded(true);
        // router.push("/auth/create-user");
        // onPress();
    };

    return (
        <div>
            {!otpSucceeded ? (
                <div>
                    {!emailConfirmed ? (
                        <VerifyEmailForm
                            onEmailConfirmed={handleEmailConfirmation}
                            setSelected={setSelected}
                            isLoading={isLoading}
                            setEmailValid={setEmailValid}
                        />
                    ) : (
                        <InputOtpForm
                            onSendOtpSucceed={handleSendOtpSucceeded}
                            //onPress={onPress}
                            isLoading={false}
                            emailValid={emailValid}
                        />
                    )}
                    <Separator className="mb-3 mt-3" />
                    <GoogleButton option={true} />
                </div>
            ) : (
                <div>
                    <CreateUserForm
                        onPress={onPress}
                        setSelected={setSelected}
                        isLoading={false}
                        location={location}
                        emailValid={emailValid}
                    />
                </div>
            )}
        </div>
    );
};
