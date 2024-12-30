"use client";
import { searchSkusByName } from "@/actions/search-skus-by-name";
import { ListboxWrapper } from "@/components/customs/search/listbox-wrapper";
import { SearchProductResponse } from "@/types/products.type";
import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import {
    ArrowDownIcon,
    ArrowUpIcon,
    BatteryFull,
    Beer,
    BicepsFlexed,
    CloudSunRain,
    Flower2,
    History,
    SearchIcon,
    X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [isArrowUp, setIsArrowUp] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);
    const [searchResults, setSearchResults] = useState<SearchProductResponse[]>(
        []
    );

    const router = useRouter();

    // Debounce logic: Đợi 300ms sau khi người dùng ngừng nhập trước khi cập nhật giá trị tìm kiếm
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
        }
        setSearchResults([]);
    }, [debouncedTerm]);

    const handleClick = () => {
        if (!showSuggestions) {
            setShowSuggestions(true);
        }
        setIsArrowUp(false);
        console.log("Input field was clicked!");
    };

    const handleCloseSuggestions = () => {
        setIsArrowUp(true); // Đặt mũi tên xuống khi đóng
        setShowSuggestions(false); // Đóng vùng đề xuất
    };

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

    const defaultSuggestions = [
        {
            key: "snack",
            label: "Snack",
            href: "/snack",
        },
        {
            key: "icecream",
            label: "Kem",
            href: "/kem",
        },
        {
            key: "banhpia",
            label: "Bánh pía 42g",
            href: "/snack/banh-bia-42g",
        },
        {
            key: "kemdanhrang",
            label: "Kem đánh răng",
            href: "/kem-danh-rang",
        },
        {
            key: "dauancailan",
            label: "Chai Dầu Ăn Cái Lân 1L",
            href: "/dau-an/chai-dau-an-cai-lan-1l",
        },
    ];
    return (
        <div className="w-3/4 sm:w-3/5 flex flex-col items-center">
            <div className="flex flex-row space-x-4 w-full items-center">
                <Input
                    size="lg"
                    placeholder="Nhập vào ô tìm kiếm..."
                    radius="full"
                    onClick={handleClick}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    startContent={
                        <SearchIcon
                            className="text-black/50 mb-0.5
                                dark:text-white/90 text-slate-400 
                                pointer-events-none flex-shrink-0"
                        />
                    }
                    endContent={
                        <div
                            className="flex items-center justify-center
                         rounded-full "
                        >
                            {isArrowUp ? (
                                <ArrowUpIcon
                                    className={`text-black/50 dark:text-white/90
                                           w-5 h-5
                             text-slate-400 pointer-events-none flex-shrink-0 transition-transform duration-300`}
                                />
                            ) : (
                                <ArrowDownIcon
                                    className={`text-black/50 dark:text-white/90
                                         w-5 h-5
                             text-slate-400 pointer-events-none flex-shrink-0 transition-transform duration-300`}
                                />
                            )}
                        </div>
                    }
                />
            </div>

            {showSuggestions && (
                <div className="absolute mt-14 w-3/4 sm:w-3/5 shadow-lg rounded-3xl z-50 bg-slate-100 dark:bg-slate-950">
                    <div className="flex justify-end">
                        <Button
                            isIconOnly
                            onPress={handleCloseSuggestions}
                            radius="full"
                        >
                            <X className="w-4 h-4 text-slate-800 dark:text-slate-200" />
                        </Button>
                    </div>

                    <ul className="list-none">
                        {searchResults.length > 0 ? (
                            <div>
                                <ListboxWrapper>
                                    <Listbox
                                        items={searchResults}
                                        aria-label="Search Results"
                                    >
                                        {(item) => (
                                            <ListboxItem
                                                key={item.id}
                                                href={`${item.categoryUrl}/${item.slug}`}
                                            >
                                                {/* {item.productName} */}
                                                {highlightSearchTerm(
                                                    item.skuName
                                                )}
                                            </ListboxItem>
                                        )}
                                    </Listbox>
                                </ListboxWrapper>
                            </div>
                        ) : (
                            <div>
                                <li className="py-2 px-4">
                                    Mọi người cũng tìm kiếm:
                                </li>
                                <ListboxWrapper>
                                    <Listbox
                                        items={defaultSuggestions}
                                        aria-label="Default suggestions"
                                    >
                                        {(item) => (
                                            <ListboxItem
                                                key={item.key}
                                                href={item.href}
                                                startContent={
                                                    <History className="w-4 h-4 text-slate-500" />
                                                }
                                            >
                                                {item.label}
                                            </ListboxItem>
                                        )}
                                    </Listbox>
                                </ListboxWrapper>
                            </div>
                        )}
                    </ul>
                </div>
            )}

            <div className="flex flex-wrap gap-4 items-center mt-8 justify-center">
                <Button
                    color="primary"
                    variant="bordered"
                    className="font-medium"
                    radius="full"
                    startContent={<CloudSunRain className="w-4 h4" />}
                    onClick={() => router.push("/bia")}
                >
                    Thời tiết
                </Button>
                <Button
                    className="border-sky-600 text-sky-600 font-medium"
                    variant="bordered"
                    radius="full"
                    startContent={<BicepsFlexed className="w-4 h4" />}
                    onClick={() => router.push("/sua-chua")}
                >
                    Sức khỏe
                </Button>
                <Button
                    color="danger"
                    variant="bordered"
                    className="font-medium"
                    radius="full"
                    startContent={<Flower2 className="w-4 h4" />}
                    onClick={() => router.push("/dau-goi")}
                >
                    Làm Đẹp
                </Button>
                <Button
                    color="warning"
                    variant="bordered"
                    className="font-medium"
                    radius="full"
                    startContent={<Beer className="w-4 h4" />}
                    onClick={() => router.push("/nuoc-ngot")}
                >
                    Lành mạnh
                </Button>
                <Button
                    color="success"
                    variant="bordered"
                    className="font-medium"
                    radius="full"
                    startContent={<BatteryFull className="w-4 h4" />}
                    onClick={() => router.push("/bia")}
                >
                    Nâng suất
                </Button>
            </div>
        </div>
    );
};

export default SearchInput;
