"use client";

import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader
} from "@nextui-org/react";
import Link from "next/link";
import { AuthTab } from "./auth-tab";

interface AuthModalProps {
    isOpen: boolean;
    onOpenChange(): void;
    location: Location[];
}

export const AuthModal: React.FC<AuthModalProps> = ({
    isOpen,
    onOpenChange,
    location
}) => {
    return (
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
                            <AuthTab onPress={onClose} location={location} />
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
    );
};

export default AuthModal;
