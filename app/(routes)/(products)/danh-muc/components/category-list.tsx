"use client";

import React from "react";
import Image from "next/image";
import SoftDrink from "../../../../../public/categories/soft-drink.png";
import CookingOil from "../../../../../public/categories/oil.png";
import PersonalHygeine from "../../../../../public/categories/amenities.png";
import HouseCleaning from "../../../../../public/categories/cleaning.png";
import CandySnack from "../../../../../public/categories/snack.png";
import Noodles from "../../../../../public/categories/instant-noodles.png";
import Milk from "../../../../../public/categories/milk-carton.png";
import { Link } from "@nextui-org/react";

const CategoryList = () => {
    return (
        <div className="ml-5 mt-5 mr-5">
            <div className="flex items-center justify-between mt-4 mb-4">
                <h2 className="text-[#64ff4b] font-bold text-2xl sm:text-3xl md:text-4xl">
                    Danh mục tại cửa hàng
                </h2>
                <Link href="/dau-an" underline="hover">
                    Xem tất cả danh mục
                </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5">
                <Link
                    href="/dau-an"
                    className="
               flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={CookingOil}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out"
                    />
                    <h2 className="font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Dầu ăn gia vị
                    </h2>
                </Link>

                <Link
                    href="/nuoc-ngot"
                    className="flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={SoftDrink}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out"
                    />
                    <h2 className="font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Bia, Nước giải khát
                    </h2>
                </Link>
                <Link
                    href="/snack"
                    className="
               flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={CandySnack}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out  "
                    />
                    <h2 className="font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Bánh Kẹo
                    </h2>
                </Link>
                <Link
                    href="#"
                    className="
               flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={Noodles}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out  "
                    />
                    <h2 className="font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Mì Phở Miến
                    </h2>
                </Link>
                <Link
                    href="/sua-tuoi"
                    className="
                flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={Milk}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out  "
                    />
                    <h2 className=" font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Sữa các loại
                    </h2>
                </Link>
                <Link
                    href="/dau-goi"
                    className="
                flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={PersonalHygeine}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out"
                    />
                    <h2 className="font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Vệ sinh cá nhân
                    </h2>
                </Link>
                <Link
                    href="/nuoc-lau-nha"
                    className="
                flex flex-col items-center 
                gap-2 p-3 rounded-lg group cursor-pointer 
                border-2 border-transparent hover:border-[#64ff4b] hover:border-2
                hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <Image
                        src={HouseCleaning}
                        alt="icon"
                        width={50}
                        height={50}
                        className="hover:scale-125 transition-all ease-in-out"
                    />
                    <h2 className=" font-medium  text-base text-slate-700 dark:text-slate-300 text-center">
                        Dọn dẹp nhà cữa
                    </h2>
                </Link>
            </div>
        </div>
    );
};

export default CategoryList;
