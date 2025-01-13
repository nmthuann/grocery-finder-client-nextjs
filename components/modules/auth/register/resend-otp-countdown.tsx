"use client";

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { Button } from "../../../ui/button";
import axios from "axios";
import { Spinner } from "@nextui-org/react";

interface ResendOTPCountdownProps {
    resendTimeout: number;
    emailToResend: string;
}

const ResendOTPCountdown: React.FC<ResendOTPCountdownProps> = ({
    resendTimeout,
    emailToResend
}) => {
    const [countdown, setCountdown] = useState<number>(resendTimeout);
    const [resending, setResending] = useState<boolean>(false);
    const [onBtnLoad, setOnBtnLoad] = useState(false);

    useEffect(() => {
        if (countdown === 0) return;

        const interval = setInterval(() => {
            setCountdown((prevCountdown) => {
                if (prevCountdown === 1) {
                    clearInterval(interval);
                    setResending(true);
                    return 0;
                }
                return prevCountdown - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    const handleResendOTP = async (emailValid: string) => {
        if (onBtnLoad) return;
        try {
            setOnBtnLoad(true);
            await axios.post(`/api/auth/resend-otp`, {
                email: emailValid
            });
            toast.success("Vui lòng kiểm tra lại mail để nhập mã OTP.");
            setCountdown(resendTimeout);
            setResending(false);
        } catch (error: unknown) {
            console.log(error);
            toast.error("Failed to resend OTP. Please try again.");
        } finally {
            setOnBtnLoad(false);
        }
    };

    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;

    const formattedCountdown = `${String(minutes).padStart(2, "0")}:${String(
        seconds
    ).padStart(2, "0")}`;

    return (
        <div>
            {resending ? (
                <div className="flex items-center justify-center space-x-0">
                    <h3 className=" text-sm ">
                        Gửi lại OTP trong {formattedCountdown}
                    </h3>
                    {onBtnLoad ? (
                        <Spinner size="sm" color="success" />
                    ) : (
                        <Button
                            variant="link"
                            className="text-sm text-primary"
                            onClick={() => {
                                handleResendOTP(emailToResend);
                            }}
                        >
                            Gửi lại
                        </Button>
                    )}
                </div>
            ) : (
                <h3 className=" mr-8 text-sm text-primary">
                    Gửi lại OTP trong {formattedCountdown}
                </h3>
            )}
        </div>
    );
};

export default ResendOTPCountdown;
