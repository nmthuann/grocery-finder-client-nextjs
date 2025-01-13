"use client";
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { AuthExceptionMessages, ErrorInput } from "@/constants/errors/errors";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input, Link, Button, Spinner } from "@nextui-org/react";

import axios from "axios";
import { Messages } from "@/constants/messages/message";

const formSchema = z.object({
    email: z
        .string()
        .min(10, {
            message: `${ErrorInput.MIN_ERROR} 10 kí tự.`
        })
        .email({
            message: ErrorInput.EMAIL_INVALID
        })
});

interface VerifyEmailFormProps {
    setSelected: (option: string) => void;
    onEmailConfirmed: () => void;
    setEmailValid: (email: string) => void;
}

export const VerifyEmailForm: React.FC<VerifyEmailFormProps> = ({
    setSelected,
    onEmailConfirmed,
    setEmailValid
}) => {
    const [onBtnLoad, setOnBtnLoad] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setOnBtnLoad(true);
            const res = await axios.post(`/api/auth/verify-email`, values);
            console.log(res.data.message);
            if (res.data.message === Messages.EMAIL_VALID) {
                toast.success(Messages.EMAIL_VALID);
                setEmailValid(values.email);
                onEmailConfirmed();
            } else if (res.data.message === AuthExceptionMessages.EMAIL_EXSIT) {
                toast.error(AuthExceptionMessages.EMAIL_EXSIT);
            } else {
                toast.error(AuthExceptionMessages.VERIFY_MAIL_FAILED);
            }
        } catch (error: unknown) {
            console.log(error);
            setOnBtnLoad(false);
            toast.error(`${AuthExceptionMessages.VERIFY_MAIL_FAILED}`);
        } finally {
            setOnBtnLoad(false);
        }
    }

    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-3"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => {
                            const isInvalid = !!form.formState.errors.email;

                            return (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            {...field} // Spread field props here
                                            label="Email"
                                            type="email"
                                            isRequired
                                            placeholder="Vui lòng nhập email."
                                            isInvalid={isInvalid}
                                            errorMessage={
                                                isInvalid
                                                    ? form.formState.errors
                                                          .email?.message
                                                    : ""
                                            }
                                            onValueChange={field.onChange} // Use field.onChange
                                        />
                                    </FormControl>
                                </FormItem>
                            );
                        }}
                    />

                    <div className="mt-5">
                        {onBtnLoad ? (
                            <Button
                                isDisabled
                                className="w-full text-slate-900 font-medium"
                            >
                                <Spinner color="success" size="sm" />
                                Vui lòng chờ ...
                            </Button>
                        ) : (
                            <Button
                                className="w-full text-white bg-gradient-to-r from-lime-400 to-green-600  font-medium"
                                type="submit"
                                variant="shadow"
                                radius="lg"
                            >
                                Xác thực tài khoản Email
                            </Button>
                        )}
                    </div>
                    <p className="text-center text-xs ">
                        Bạn đã có tài khoản?{" "}
                        <Link
                            size="sm"
                            underline="hover"
                            className="cursor-pointer"
                            onPress={() => setSelected("login")}
                        >
                            Đăng nhập
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};
