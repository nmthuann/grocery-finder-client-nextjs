"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo/logo-website-3.png";

const Footer = () => {
    return (
        <div className="mt-8">
            <div className="w-full mb-5 flex justify-between items-center">
                <div>
                    <Link href="/" className="flex items-center">
                        <Image src={logo} alt="logo" width={80} height={50} />
                        <h1 className=" text-lg sm:text-xl md:text-2xl cursor-pointer text-slate-500 font-semibold">
                            Tạp Hóa{" "}
                            <span className="text-[#64ff4c] ml-2 font-bold">
                                Tân Hiệp
                            </span>
                        </h1>
                    </Link>
                </div>
                <div>
                    <ul className="flex items-center flex-wrap">
                        <li>
                            <Link
                                href="/"
                                className="text-[16px] text-[#b1b0b6] font-Inter font-[500]
                                     hover:text-[#64ff4b] duration-200 transition px-4 text-sm sm:text-base md:text-lg"
                            >
                                Trang chủ
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/policy"
                                className="text-[16px] text-[#b1b0b6] font-Inter font-[500] 
                                hover:text-[#64ff4b] duration-200 transition px-4 text-sm sm:text-base md:text-lg"
                            >
                                Chính sách CSKH
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="text-[16px] text-[#b1b0b6] font-Inter font-[500] 
                                hover:text-[#64ff4b] duration-200 transition px-4 text-sm sm:text-base md:text-lg"
                            >
                                Liên hệ
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-[18px] font-[400] text-[#b1b0b6] font-Inter text-center text-xs sm:text-sm md:text-base">
                Copyright © 2024 Tan Hiep Grocery . All Rights Reserved
            </p>
            <br />
            <br />
        </div>
    );
};

export default Footer;
