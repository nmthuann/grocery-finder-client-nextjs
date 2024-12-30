"use client";

import { Button } from "@nextui-org/react";
import React from "react";

const SellersBanner = () => {
    return (
        <div className="w-full 2xl:w-[80%] 2xl:m-auto h-[30vh] flex items-center justify-center sellers-banner rounded-xl md:m-2">
            <div className="text-center">
                <h1
                    className={`text-4xl font-[700] font-Inter  font-Monserrat`}
                >
                    Đăng ký tài khoản để nhận thêm nhiều ưu đãi
                </h1>
                <br />
                <br />
                <Button
                    variant="shadow"
                    radius="lg"
                    className="
                    mb-3 p-6 text-xl 
                    bg-gradient-to-r from-lime-400  to-green-600 
                    text-white font-semibold font-Inter"
                >
                    <span>Đăng ký ngay</span>
                </Button>
            </div>
        </div>
    );
};

export default SellersBanner;
