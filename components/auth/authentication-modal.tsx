"use client";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
import Link from "next/link";
import { AuthenticationTab } from "./authentication-tab";

interface AuthenticationModalProps {
    isOpen: boolean;
    onOpenChange(): void;
    location: ILocation[];
    size: string;
}

export const AuthenticationModal: React.FC<AuthenticationModalProps> = ({
    isOpen,
    onOpenChange,
    location,
    size,
}) => {
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="center"
                backdrop="blur"
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                size="md"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-[#64ff4c] font-bold">
                                Xác thực tài khoản
                            </ModalHeader>
                            <ModalBody>
                                <AuthenticationTab
                                    onPress={onClose}
                                    isLoading={false}
                                    location={location}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <p className="px-8 text-center text-xs text-muted-foreground">
                                    By clicking continue, you agree to our{" "}
                                    <Link
                                        href="/"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/"
                                        className="underline underline-offset-4 hover:text-primary"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default AuthenticationModal;
