"use client";
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RegisterAccount } from "./register/register-account";
import { LoginAccount } from "./login/login-account";

interface AuthenticationTabProps {
    onPress(): void;
    isLoading: boolean;
    location: ILocation[];
}
export const AuthenticationTab: React.FC<AuthenticationTabProps> = ({
    onPress,
    isLoading,
    location,
}) => {
    const [selected, setSelected] = React.useState<string>("login");

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <Card className="w-full max-w-md sm:w-96 sm:h-96 ">
                <ScrollArea className="h-[484px] w-full sm:w-96 rounded-md">
                    <CardBody className="overflow-hidden">
                        <Tabs
                            fullWidth
                            size="md"
                            aria-label="Tabs form"
                            selectedKey={selected}
                            onSelectionChange={(key) =>
                                setSelected(key as string)
                            }
                        >
                            <Tab key="login" title="Đăng nhập">
                                <LoginAccount
                                    onPress={onPress}
                                    setSelected={setSelected}
                                    isLoading={isLoading}
                                />
                            </Tab>

                            <Tab key="register" title="Đăng ký">
                                <RegisterAccount
                                    onPress={onPress}
                                    setSelected={setSelected}
                                    isLoading={isLoading}
                                    location={location}
                                />
                            </Tab>
                        </Tabs>
                    </CardBody>
                </ScrollArea>
            </Card>
        </div>
    );
};
