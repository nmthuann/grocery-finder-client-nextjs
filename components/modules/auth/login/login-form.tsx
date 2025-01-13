"use client";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { AuthExceptionMessages, ErrorInput } from "@/constants/errors/errors";
import { Messages } from "@/constants/messages/message";
import { useAuthContext } from "@/providers/auth-provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Link, Spinner } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

interface LoginFormProps {
    onPress: () => void;
    setSelected: (option: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    onPress,
    setSelected
}) => {
    const [onBtnLoad, setOnBtnLoad] = useState(false);
    const router = useRouter();
    const { setUserCallback } = useAuthContext();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            setOnBtnLoad(true);

            const res = await axios.post(`/api/auth/login`, values);
            if (res.data.message) {
                setOnBtnLoad(false);
                toast.error(res.data.message);
            } else {
                setOnBtnLoad(false);
                toast.success(Messages.LOGIN_SUCCESS);
                setUserCallback(res.data);
                router.push("/");
                onPress();
            }
        } catch (error: unknown) {
            console.log(error);
            setOnBtnLoad(false);
            toast.error(`${AuthExceptionMessages.LOGIN_FAILED}`);
        } finally {
            setOnBtnLoad(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.email;
                        return (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        label="Email"
                                        type="email"
                                        isRequired
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors.email
                                                      ?.message
                                                : ""
                                        }
                                        placeholder="Vui lòng nhập email."
                                        onValueChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.password;
                        return (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        {...field}
                                        isRequired
                                        label="Mật khẩu"
                                        placeholder="Vui lòng nhập mật khẩu"
                                        type={"password"}
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors.password
                                                      ?.message
                                                : ""
                                        }
                                        onValueChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}
                />

                <Link size="sm" href="/auth/forget-password" underline="hover">
                    Quên mật khẩu ?
                </Link>

                <div className="mt-5">
                    {onBtnLoad ? (
                        <Button isDisabled className="w-full font-medium">
                            <Spinner color="success" size="sm" />
                            Vui lòng chờ ...
                        </Button>
                    ) : (
                        <Button
                            className="w-full text-white bg-gradient-to-r from-lime-400  to-green-600  font-medium"
                            type="submit"
                            variant="shadow"
                            radius="lg"
                        >
                            Đăng nhập
                        </Button>
                    )}
                </div>
                <p className="text-center text-xs">
                    Bạn chưa có tài khoản?{" "}
                    <Link
                        size="sm"
                        onPress={() => setSelected("register")}
                        underline="hover"
                        className="cursor-pointer"
                    >
                        Đăng ký
                    </Link>
                </p>
            </form>
        </Form>
    );
};

const formSchema = z.object({
    email: z
        .string()
        .min(10, {
            message: `${ErrorInput.MIN_ERROR} 10 kí tự.`
        })
        .email({
            message: ErrorInput.EMAIL_INVALID
        }),
    password: z.string().min(8, {
        message: `${ErrorInput.MIN_ERROR} 8 kí tự.`
    })
});
