"use client";

import { Button, Chip, Image } from "@nextui-org/react";

import { useRouter } from "next/navigation";
import React from "react";
import banner from "../../public/banners/White Green Modern Illustrated Global Recycling Day Instagram Post.png";

const About = () => {
    const router = useRouter();

    return (
        <div className="w-full relative grid md:grid-cols-2 md:py-8">
            <div className="col-span-1 w-full md:w-[60%] md:mt-5 px-5 md:px-[unset]">
                <Chip
                    size="lg"
                    className="mb-[30px] h-[37px] bg-slate-900 text-white"
                >
                    Về Chúng Tôi
                </Chip>
                <h5
                    className={`text-4xl font-[700] font-Inter text-green-500 mb-5 !leading-[50px] capitalize`}
                >
                    Chiến Dịch Giảm Thiểu Rác thải từ túi nhựa
                </h5>
                <p
                    className={`text-[18px] font-[400] text-[#b1b0b6] font-Inter pb-5`}
                >
                    Để bảo vệ môi trường xanh sạch đẹp, cửa hàng tạp hóa chúng
                    tôi cố gắng sử dụng túi giấy thay cho túi nhựa truyền thống.
                </p>
                <Button
                    radius="full"
                    variant="shadow"
                    className={` text-xl font-semibold bg-gradient-to-r from-lime-400  to-green-600 text-white h-[45px]`}
                    onClick={() => router.push("/danh-muc")}
                >
                    Đồng hàng cùng chúng tôi
                </Button>
            </div>
            <div className="col-span-1 my-10 md:mt-[unset]">
                <Image
                    src={banner.src}
                    alt=""
                    width={600}
                    height={600}
                    isBlurred
                    radius="lg"
                />
            </div>
        </div>
    );
};

export default About;
