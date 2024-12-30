import { ReactNode } from "react";

interface ListboxWrapperProps {
    children: ReactNode;
}

export const ListboxWrapper = ({ children }: ListboxWrapperProps) => (
    <div className="w-full px-1 py-2">{children}</div>
);
