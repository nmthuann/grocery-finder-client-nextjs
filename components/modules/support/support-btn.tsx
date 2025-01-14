"use client";
import { Button } from "@nextui-org/react";
import { MessageCircleQuestionIcon } from "lucide-react";
import React from "react";

export const SupportButton: React.FC = () => {
    return (
        <Button
            className="fixed bottom-20 right-20 animate-bounce bg-slate-50/60 dark:bg-slate-900/80 
        p-2 w-12 h-12 ring-1 ring-slate-900/5 dark:ring-slate-200/20 
        shadow-lg rounded-full m-4 cursor-pointer flex items-center justify-center
          hover:dark:bg-slate-50/60 hover:bg-slate-900/80  hover:text-white hover:dark:text-slate-900/80 
        "
            isIconOnly
            variant="bordered"
            aria-label="hướng dẫn"
        >
            <MessageCircleQuestionIcon className="w-8 h-8 ml-0.5 " />
        </Button>
    );
};
