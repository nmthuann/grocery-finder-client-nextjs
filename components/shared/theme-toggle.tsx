"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
    const { setTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    className="rounded-full border-3 shadow dark:bg-slate-900 bg-white  dark:border-slate-400"
                    variant="secondary"
                    size="icon"
                >
                    <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 b text-slate-800 dark:text-slate-400" />
                    <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-800 dark:text-slate-400" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Sáng
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Tối
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    Hệ thống
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
