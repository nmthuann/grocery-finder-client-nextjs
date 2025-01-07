"use client";

import { Button, Image } from "@nextui-org/react";

import React from "react";
import banner from "../../public/banners/Xanh dương Cam Hữu cơ Thông điệp Chào mừng Trường tiểu học Banner tựu trường.png";

const AdvertisingCampaign = () => {
    return (
        <div className="w-full relative p-4 md:p-[unset] grid md:grid-cols-2 py-8 mt-10 ">
            <div className="col-span-1">
                <Image
                    radius="lg"
                    isBlurred
                    src={banner.src}
                    width={800}
                    height={400}
                    alt="Advertising Campaign"
                    className=" md:w-[90%] md:ml-[-50px] 2xl:ml-[-90px]"
                />
            </div>
            <div className="col-span-1 w-full flex justify-center items-center">
                <div className="2xl:w-[60%]">
                    <Button
                        className="text-[18px] text-white p-5 font-[600] font-Inter  mb-[30px] h-[37px] bg-red-500"
                        radius="full"
                        variant="shadow"
                    >
                        Chương trình khuyến mãi
                    </Button>
                    <h5
                        className={`text-4xl font-[700] font-Inter mb-5 !leading-[50px]`}
                    >
                        Chào đón năm học mới
                    </h5>
                    <p
                        className={`text-[18px] font-[400] text-gray-500 font-Inter pb-5`}
                    >
                        Chào đón năm học mới với ưu đãi hấp dẫn! Giảm giá đặc
                        biệt lên đến 30% cho tất cả các mặt hàng dụng cụ học tập
                        và đồ dùng văn phòng. Nhanh tay mua sắm ngay hôm nay để
                        chuẩn bị tốt nhất cho năm học mới!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdvertisingCampaign;
