"use client";
import * as React from "react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { ChevronRight, SearchIcon } from "lucide-react";

import { JSX, useEffect, useState } from "react";
import { searchSkusByName } from "@/actions/search-skus-by-name";
import { ListboxWrapper } from "./listbox-wrapper";
import { SearchProductResponse } from "@/types/products.type";

export function SearchDialog() {
    const [open, setOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [searchResults, setSearchResults] = useState<SearchProductResponse[]>(
        []
    );

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 300); // Thời gian chờ debounce (300ms)

        // Dọn dẹp timeout khi searchTerm thay đổi trước khi hết 300ms
        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchTerm]); // Chỉ chạy lại hiệu ứng khi searchTerm thay đổi

    // Tạo giả lập tìm kiếm khi debouncedTerm thay đổi
    useEffect(() => {
        if (debouncedTerm) {
            console.log("Thực hiện tìm kiếm với từ khóa:", debouncedTerm);
            searchSkusByName(debouncedTerm)
                .then((data) => {
                    console.log("Kết quả tìm kiếm:", data);
                    setSearchResults(data); // Lưu kết quả vào state
                })
                .catch((error) => {
                    console.error("Lỗi khi tìm kiếm:", error);
                });
        } else {
            setSearchResults([]); // Xóa kết quả khi không có từ khóa
        }
    }, [debouncedTerm]);

    const highlightSearchTerm = (text: string): (string | JSX.Element)[] => {
        if (!searchTerm) return [text]; // Return text as a single string element in an array

        const regex = new RegExp(`(${searchTerm})`, "gi");
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? (
                <span
                    key={index}
                    className="bg-yellow-200 dark:bg-yellow-500 font-bold"
                >
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    radius="full"
                    isIconOnly
                    aria-label="more than 99 notifications"
                    variant="light"
                    className="font-bold rounded-full dark:text-white text-slate-800 border-3 
                    dark:bg-slate-900 bg-white  dark:border-slate-400"
                >
                    <SearchIcon
                        size={18}
                        className="text-slate-800 dark:text-slate-400"
                    />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-full">
                <DialogHeader>
                    <DialogTitle>Tìm Kiếm sản phẩm bạn muốn</DialogTitle>
                    <DialogDescription>
                        Bạn muốn tìm kiếm bất kỳ sản phẩm nào bạn muốn. Click
                        vào đây để nhập từ khóa.
                    </DialogDescription>
                </DialogHeader>
                <Input
                    isClearable
                    radius="lg"
                    classNames={{
                        label: "text-black/50 dark:text-white/90",
                        input: [
                            "bg-transparent",
                            "text-black/90 dark:text-white/90",
                            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-xl",
                            "bg-default-200/50",
                            "dark:bg-default/60",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:hover:bg-default/70",
                            "group-data-[focus=true]:bg-default-200/50",
                            "dark:group-data-[focus=true]:bg-default/60",
                            "!cursor-text",
                        ],
                    }}
                    placeholder="tìm kiếm..."
                    startContent={
                        <SearchIcon
                            className="text-black/50 mb-0.5
                                             dark:text-white/90 text-slate-400 
                                             pointer-events-none flex-shrink-0"
                        />
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onClear={() => setSearchTerm("")}
                />
                <div className="mt-5">
                    <ul className="list-none">
                        <div>
                            <ListboxWrapper>
                                <Listbox
                                    items={searchResults}
                                    aria-label="Search Results"
                                    emptyContent={
                                        " Vui lòng nhập vào ô tìm kiếm"
                                    }
                                >
                                    {(item) => (
                                        <ListboxItem
                                            key={item.id}
                                            href={`${item.categoryUrl}${item.slug}`}
                                            endContent={
                                                <ChevronRight className="w-4 h-4 text-slate-600" />
                                            }
                                        >
                                            {highlightSearchTerm(item.skuName)}
                                        </ListboxItem>
                                    )}
                                </Listbox>
                            </ListboxWrapper>
                        </div>
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    );
}
