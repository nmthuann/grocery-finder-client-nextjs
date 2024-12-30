import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";

interface ProviderProps {
    children: React.ReactNode;
}

export default function NextUiProvider({ children }: Readonly<ProviderProps>) {
    // 2. Wrap NextUIProvider at the root of your app
    return <NextUIProvider>{children}</NextUIProvider>;
}
