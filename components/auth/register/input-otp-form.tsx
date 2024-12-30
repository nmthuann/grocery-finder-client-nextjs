"use client";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

import toast from "react-hot-toast";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import ResendOTPCountdown from "./resend-otp-countdown";
import axios from "axios";
import { AuthExceptionMessages } from "@/constants/errors/errors";
import { Button as BtnNextUI, Spinner } from "@nextui-org/react";
import { Messages } from "@/constants/messages/message";
interface InputOtpFormProps {
    //onPress: () => void;
    isLoading: boolean;
    onSendOtpSucceed: () => void;
    emailValid: string;
}

export const InputOtpForm: React.FC<InputOtpFormProps> = ({
    //onPress,
    isLoading,
    onSendOtpSucceed,
    emailValid,
}) => {
    const [value, setValue] = useState("");
    const [onBtnLoad, setOnBtnLoad] = useState(isLoading);
    // const [loading, setLoading] = useState(isLoading);

    const isValueComplete = value.length === 6;
    const handleSendOTP = async () => {
        if (onBtnLoad) return;
        if (isValueComplete) {
            try {
                setOnBtnLoad(true);
                const res = await axios.post(`/api/auth/send-otp`, {
                    email: emailValid,
                    otp: value,
                });
                if (res.data.message === Messages.OTP_VALID) {
                    toast.success(Messages.OTP_VALID);
                    setOnBtnLoad(false);
                    onSendOtpSucceed();
                } else {
                    setOnBtnLoad(false);
                    toast.error(AuthExceptionMessages.OTP_INVALID);
                }
            } catch (error) {
                setOnBtnLoad(false);
                toast.error(AuthExceptionMessages.OTP_FAILED);
            } finally {
                setOnBtnLoad(false);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="mb-4">
                <Label
                    className=" text-xs text-center text-slate-600"
                    htmlFor="otp"
                >
                    Vui lòng nhập OTP từ email: {emailValid}
                </Label>
            </div>

            <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
            >
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>

                <InputOTPSeparator />

                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>

            <div className="mt-2 text-center text-xs text-primary">
                {value === "" ? <></> : <>Bạn vừa nhập: {value}</>}
            </div>
            <div>
                <ResendOTPCountdown
                    resendTimeout={60}
                    emailToResend={emailValid}
                />
            </div>

            {isValueComplete ? (
                <div className=" w-full flex justify-center mt-5">
                    {onBtnLoad ? (
                        <BtnNextUI isDisabled className="w-full  font-medium">
                            <Spinner color="success" size="sm" />
                            Vui lòng chờ ...
                        </BtnNextUI>
                    ) : (
                        <BtnNextUI
                            disabled={onBtnLoad}
                            className="w-full bg-gradient-to-r from-lime-400 to-green-600 text-white font-medium"
                            onClick={handleSendOTP}
                            variant="shadow"
                        >
                            Xác thực
                        </BtnNextUI>
                    )}
                </div>
            ) : (
                <></>
            )}

            <div className="flex flex-row items-center justify-center">
                <h3 className="text-xs">Có sự cố xảy ra khi xác thực?</h3>
                <Button className="text-primary text-xs p-2" variant="link">
                    Trợ giúp
                </Button>
            </div>
        </div>
    );
};
