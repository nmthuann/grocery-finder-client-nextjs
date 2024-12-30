"use client";
import { EyeFilledIcon } from "@/components/icons/eye-filled-icon";
import { EyeSlashFilledIcon } from "@/components/icons/eyeslash-filled-icon";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import {
    AuthExceptionMessages,
    ErrorInput,
    SystemError,
} from "@/constants/errors/errors";
import { Messages } from "@/constants/messages/message";
import { useAuthContext } from "@/providers/auth-provider";
import { UserRegister } from "@/types/users.type";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button as BtnNextUI,
    Input as InputNextUI,
    Link as LinkNextUI,
    Select,
    SelectItem,
    Spinner,
} from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";

type CreateUserFormValues = z.infer<typeof CreateUserFormSchema>;
const defaultValues: Partial<CreateUserFormValues> = {
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
};

interface CreateUserFormProps {
    onPress: () => void;
    setSelected: (option: string) => void;
    isLoading: boolean;
    location: ILocation[];
    emailValid: string;
}

export const CreateUserForm: React.FC<CreateUserFormProps> = ({
    onPress,
    setSelected,
    isLoading,
    location,
    emailValid,
}) => {
    const router = useRouter();
    // const [loading, setLoading] = useState(isLoading);
    const [onBtnLoad, setOnBtnLoad] = useState(isLoading);

    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
        useState(false);

    const togglePassowrdVisibility = () =>
        setIsPasswordVisible(!isPasswordVisible);
    const toggleConfirmPasswordVisibility = () =>
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);

    const [city, setCity] = useState<string>("");
    const [districtList, setDistrictList] = useState<IDistricts[]>([]);
    const [district, setDistrict] = useState<string>("");
    const [wardList, setWardList] = useState<IWards[]>([]);
    const { setUserCallback } = useAuthContext();

    // const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(e.target.value);
    // };

    // const handleConfirmPasswordChange = (
    //     e: React.ChangeEvent<HTMLInputElement>
    // ) => {
    //     setConfirmPassword(e.target.value);
    // };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCityId: string = event.target.value;
        setCity(selectedCityId);
        const selectedDistricts = location.find(
            (city: ILocation) => city.Id === selectedCityId
        );
        if (selectedDistricts) {
            setDistrictList(selectedDistricts.Districts || []);
        } else {
            setDistrictList([]);
        }
    };

    const handleDistrictChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedDistrictId: string = event.target.value;
        setDistrict(selectedDistrictId);
        const selectedWards: IDistricts | undefined = districtList.find(
            (district: IDistricts) => district.Id === selectedDistrictId
        );

        if (selectedWards) {
            setWardList(selectedWards.Wards || []);
        } else {
            setWardList([]);
        }
    };

    const form = useForm<z.infer<typeof CreateUserFormSchema>>({
        resolver: zodResolver(CreateUserFormSchema),
        defaultValues,
    });

    async function onSubmit(values: z.infer<typeof CreateUserFormSchema>) {
        try {
            setOnBtnLoad(true);
            const userRegister: UserRegister = {
                email: emailValid,
                password: values.password,
                phone: values.phone,
                firstName: values.firstName,
                lastName: values.lastName,
                address: `${values.address}, ${values.ward}, ${values.district}, ${values.city}`,
            };
            const res = await axios.post(`/api/auth/register`, userRegister);

            if (res.data.message === AuthExceptionMessages.EMAIL_EXSIT) {
                setOnBtnLoad(false);
                toast.error(`${AuthExceptionMessages.EMAIL_EXSIT}`);
            } else if (
                res.data.message === AuthExceptionMessages.REGISTER_USER_FAILED
            ) {
                setOnBtnLoad(false);
                toast.error(`${AuthExceptionMessages.REGISTER_USER_FAILED}`);
            } else {
                toast.success(Messages.EMAIL_VALID);
                setOnBtnLoad(false);
                setUserCallback(res.data);
                router.push("/");
                onPress();
            }
        } catch (error) {
            setOnBtnLoad(false);
            toast.error(`${SystemError.INTERNAL_SERVER_ERROR}`);
        } finally {
            setOnBtnLoad(false);
            //setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                {/* first name*/}
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.firstName;
                        return (
                            <FormItem>
                                <FormControl>
                                    <InputNextUI
                                        {...field}
                                        isRequired
                                        label="Tên"
                                        placeholder="Vui lòng nhập Tên"
                                        type="text"
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors
                                                      .firstName?.message
                                                : ""
                                        }
                                        onValueChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}
                />
                {/* last name*/}
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.lastName;
                        return (
                            <FormItem>
                                <FormControl>
                                    <InputNextUI
                                        {...field}
                                        isRequired
                                        label="Họ"
                                        placeholder="Vui lòng nhập Họ"
                                        type="text"
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors.lastName
                                                      ?.message
                                                : ""
                                        }
                                        onValueChange={field.onChange}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                {/* password*/}
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.password;
                        return (
                            <FormItem>
                                <FormControl>
                                    <InputNextUI
                                        isRequired
                                        label="Mật khẩu"
                                        placeholder="Vui lòng nhập mật khẩu"
                                        description="Mật Khẩu phải đủ 8 kí tự."
                                        endContent={
                                            <button
                                                className="focus:outline-none"
                                                type="button"
                                                onClick={
                                                    togglePassowrdVisibility
                                                }
                                                aria-label="toggle password visibility"
                                            >
                                                {isPasswordVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        {...field}
                                        // onChangeCapture={handlePasswordChange}
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
                                <FormMessage />
                            </FormItem>
                        );
                    }}
                />
                {/* confirm password*/}
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => {
                        const isInvalid =
                            !!form.formState.errors.confirmPassword;
                        return (
                            <FormItem>
                                <FormControl>
                                    <InputNextUI
                                        isRequired
                                        label="Nhập lại Mật khẩu"
                                        placeholder="Nhập lại mật khẩu"
                                        endContent={
                                            <button
                                                className="focus:outline-none"
                                                type="button"
                                                onClick={
                                                    toggleConfirmPasswordVisibility
                                                }
                                                aria-label="toggle password visibility"
                                            >
                                                {isConfirmPasswordVisible ? (
                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                ) : (
                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                )}
                                            </button>
                                        }
                                        type={
                                            isConfirmPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        {...field}
                                        // onChangeCapture={
                                        //     handleConfirmPasswordChange
                                        // }
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors
                                                      .confirmPassword?.message
                                                : ""
                                        }
                                        onValueChange={field.onChange}
                                    />
                                </FormControl>
                            </FormItem>
                        );
                    }}
                />
                {/* Số Điện thoại */}
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.phone;
                        return (
                            <FormItem>
                                <FormControl>
                                    <InputNextUI
                                        {...field}
                                        label="Số điện thoại"
                                        type="number"
                                        isRequired
                                        placeholder="Vui lòng nhập số điện thoại"
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors.phone
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
                {/* City */}
                <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select
                                    isRequired
                                    label="Tỉnh thành"
                                    placeholder="Chọn tỉnh"
                                    className="max-w-full"
                                    selectionMode="single"
                                    {...field} // Spread operator sau khi định nghĩa onChange
                                    onChange={(event) => {
                                        handleCityChange(event);
                                        field.onChange(event); // Gọi sự kiện onChange từ field
                                    }}
                                >
                                    {location.map((city: ILocation) => (
                                        <SelectItem
                                            key={city.Id}
                                            onClick={() => {
                                                form.setValue(
                                                    "city",
                                                    city.Name
                                                );
                                            }}
                                        >
                                            {city.Name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* District */}
                <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select
                                    isRequired
                                    label="Quận/ Huyện"
                                    placeholder="Chọn quận/ huyện"
                                    className="max-w-full"
                                    selectionMode="single"
                                    {...field} // Spread operator sau khi định nghĩa onChange
                                    onChange={(event) => {
                                        handleDistrictChange(event);
                                        field.onChange(event); // Gọi sự kiện onChange từ field
                                    }}
                                >
                                    {districtList.map((district) => (
                                        <SelectItem
                                            key={district.Id}
                                            onClick={() => {
                                                form.setValue(
                                                    "district",
                                                    district.Name
                                                );
                                            }}
                                        >
                                            {district.Name}
                                        </SelectItem>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Ward */}
                <FormField
                    control={form.control}
                    name="ward"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Select
                                    isRequired
                                    items={wardList}
                                    label="Phường/ Xã"
                                    placeholder="Chọn phường/ xã"
                                    selectionMode="single"
                                    className="max-w-full"
                                    {...field}
                                >
                                    {(ward) => (
                                        <SelectItem
                                            key={ward.Id}
                                            onClick={() => {
                                                form.setValue(
                                                    "ward",
                                                    ward.Name
                                                );
                                            }}
                                        >
                                            {ward.Name}
                                        </SelectItem>
                                    )}
                                </Select>
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                {/* Địa Chỉ */}
                <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => {
                        const isInvalid = !!form.formState.errors.address;
                        return (
                            <FormItem>
                                <FormControl>
                                    <InputNextUI
                                        {...field}
                                        isRequired
                                        label="Địa chỉ"
                                        placeholder="Vui lòng nhập địa chỉ nhà, đường ..."
                                        isInvalid={isInvalid}
                                        errorMessage={
                                            isInvalid
                                                ? form.formState.errors.address
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

                <div className="mt-5">
                    {onBtnLoad ? (
                        <BtnNextUI isDisabled className="w-full  font-medium">
                            <Spinner color="success" size="sm" />
                            Vui lòng chờ ...
                        </BtnNextUI>
                    ) : (
                        <BtnNextUI
                            className="w-full bg-gradient-to-r from-lime-400 to-green-600 font-medium text-white"
                            type="submit"
                            variant="shadow"
                        >
                            Đăng ký
                        </BtnNextUI>
                    )}
                </div>
                <p className="text-center text-small">
                    Bạn đã có tài khoản?{" "}
                    <LinkNextUI
                        size="sm"
                        onPress={() => setSelected("login")}
                        underline="hover"
                        className="cursor-pointer"
                    >
                        Đăng nhập
                    </LinkNextUI>
                </p>
            </form>
        </Form>
    );
};

const CreateUserFormSchema = z
    .object({
        firstName: z
            .string()
            .min(2, {
                message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
            })
            .max(10, {
                message: `${ErrorInput.MAX_ERROR} 10 kí tự.`,
            })
            .refine(
                (value) => {
                    return (
                        !/\d/.test(value) &&
                        value.trim() !== "" &&
                        /^[^\s]*$/.test(value)
                    );
                },
                {
                    message: ErrorInput.NAME_INVALID,
                }
            ),
        lastName: z.string().min(2, {
            message: `${ErrorInput.MIN_ERROR} 2 kí tự.`,
        }),
        password: z.string().min(8, {
            message: `${ErrorInput.MIN_ERROR} 8 kí tự.`,
        }),
        confirmPassword: z.string().min(8, {
            message: ErrorInput.PASSWORD_ERROR,
        }),
        phone: z.string().refine((value) => /^\d{10}$/.test(value), {
            message: ErrorInput.PHONE_NUMBER_ERROR,
        }),
        address: z.string().min(1, {
            message: `${ErrorInput.NOT_FULL_FIELD}`,
        }),
        city: z.string().min(1, {
            message: `${ErrorInput.NOT_FULL_FIELD}`,
        }),
        district: z.string().min(1, {
            message: `${ErrorInput.NOT_FULL_FIELD}`,
        }),
        ward: z.string().min(1, {
            message: `${ErrorInput.NOT_FULL_FIELD}`,
        }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: `${ErrorInput.PASSWORD_NOT_MATCH}`,
        path: ["confirmPassword"], // Đặt lỗi vào trường confirmPassword
    });
