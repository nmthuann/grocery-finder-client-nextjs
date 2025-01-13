"use client";

import React from "react";
import { Tabs, Tab, Card, CardBody, ScrollShadow } from "@nextui-org/react";
import { LoginTab } from "./login/login-tab";
import { RegisterTab } from "./register/register-tab";

interface AuthTabProps {
    onPress(): void;
    location: Location[];
}
export const AuthTab: React.FC<AuthTabProps> = ({ onPress, location }) => {
    const [selected, setSelected] = React.useState<string>("login");

    return (
        <div className="flex flex-col w-full justify-center items-center">
            <Card className="w-full max-w-md sm:w-96 sm:h-96 ">
                <ScrollShadow
                    hideScrollBar
                    className="h-[484px] w-full sm:w-96 rounded-md "
                >
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
                                <LoginTab
                                    onPress={onPress}
                                    setSelected={setSelected}
                                />
                            </Tab>

                            <Tab key="register" title="Đăng ký">
                                <RegisterTab
                                    onPress={onPress}
                                    setSelected={setSelected}
                                    location={location}
                                />
                            </Tab>
                        </Tabs>
                    </CardBody>
                </ScrollShadow>
            </Card>
        </div>
    );
};
