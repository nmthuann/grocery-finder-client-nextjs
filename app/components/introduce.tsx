"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/assets/line.png";
import MarQuee from "react-fast-marquee";
import SearchInput from "@/app/components/search-input";
import Typewriter from "typewriter-effect";

const rowOneImages = [
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726740023/wqw4xwp2g1stfrdbiygc.jpg",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726740141/ebruvdsfembdcg05mwrh.webp",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726741484/aw8w9zn4iwqxg1vunjhi.jpg",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726740416/gyqrwgshavw9h4meutjr.jpg",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726740839/uzcj7nsvnkuytzfxd4og.jpg",
    },
];

const rowTwoImages = [
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726741011/dfvpnzbm2thwrybumoqj.jpg",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726741288/damy2nytoivsppxkhgvt.jpg",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726741286/wljo3duuuuiy0hqng5un.png",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726741038/qm6qnuochtthwterhykt.jpg",
    },
    {
        url: "https://res.cloudinary.com/ddyreawwf/image/upload/v1726740839/t3yqdbe3oxhxxowqw8fc.jpg",
    },
];

const Introduce = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) {
            setMounted(true);
        }
    }, [mounted]);

    if (!mounted) {
        return null;
    }

    return (
        <div className="w-full md:min-h-screen flex items-center justify-center ">
            <div>
                <div className="flex flex-col items-center justify-between">
                    <h1 className="font-Monserrat text-center font-[700] text-lg leading-snug py-5 sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl sm:leading-snug xl:leading-[80px] 2xl:leading-[100px] sm:mt-10 md:mt-20">
                        <Typewriter
                            options={{
                                autoStart: true,
                                loop: false,
                                cursorClassName: "text-[#94a3b8]",
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(
                                        'Bạn muốn tìm kiếm <span style="color: #64FF4B;">Sản phẩm</span>?'
                                    )
                                    .pauseFor(1000)
                                    .callFunction(() => {
                                        typewriter.stop();
                                    })
                                    .start();
                            }}
                        />
                    </h1>
                    <SearchInput />
                </div>
                <div className="md:mt-5">
                    <Image
                        src={line}
                        alt=""
                        className="absolute hidden md:block"
                        width={2000}
                        height={2}
                    />
                </div>
                <div className="w-screen mb-5 md:mb-20">
                    <div className=" rotate-[-4deg] mt-10 md:mt-[6.5rem] z-30">
                        <MarQuee>
                            {rowOneImages.map((i) => (
                                <Image
                                    src={i.url}
                                    key={i.url}
                                    alt=""
                                    className="m-2 md:m-4 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] rounded-[20px]"
                                    width={500}
                                    height={300}
                                />
                            ))}
                        </MarQuee>
                        <MarQuee>
                            {rowTwoImages.map((i) => (
                                <Image
                                    src={i.url}
                                    key={i.url}
                                    alt=""
                                    className="m-2 md:m-4 w-[150px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] rounded-[20px]"
                                    width={500}
                                    height={300}
                                />
                            ))}
                        </MarQuee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;
