"use client";
import { useState } from "react";
import { InputOtpForm } from "./input-otp-form";
import { VerifyEmailForm } from "./verify-email-form";
import { Separator } from "@/components/ui/separator";
import { RegisterForm } from "./register-form";
import { GoogleButton } from "@/components/modules/auth/btn-google";

interface RegisterTabProps {
    onPress: () => void;
    location: Location[];
    setSelected: (option: string) => void;
}

export const RegisterTab: React.FC<RegisterTabProps> = ({
    onPress,
    location,
    setSelected
}) => {
    const [emailConfirmed, setEmailConfirmed] = useState(false);
    const [otpSucceeded, setOtpSucceeded] = useState(false);
    const [emailValid, setEmailValid] = useState<string>("");

    const handleEmailConfirmation = () => {
        setEmailConfirmed(true);
    };
    const handleSendOtpSucceeded = () => {
        setOtpSucceeded(true);
    };

    return (
        <div>
            {!otpSucceeded ? (
                <div>
                    {!emailConfirmed ? (
                        <VerifyEmailForm
                            onEmailConfirmed={handleEmailConfirmation}
                            setSelected={setSelected}
                            setEmailValid={setEmailValid}
                        />
                    ) : (
                        <InputOtpForm
                            onSendOtpSucceed={handleSendOtpSucceeded}
                            emailValid={emailValid}
                        />
                    )}
                    <Separator className="mb-3 mt-3" />
                    <GoogleButton option={true} />
                </div>
            ) : (
                <div>
                    <RegisterForm
                        onPress={onPress}
                        setSelected={setSelected}
                        location={location}
                        emailValid={emailValid}
                    />
                </div>
            )}
        </div>
    );
};
