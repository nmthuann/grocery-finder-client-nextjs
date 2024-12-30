"use client";

import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const partners = [
    {
        url: "https://pixner.net/aikeu/assets/images/partner/one.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/two.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/three.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/four.png",
    },
    {
        url: "https://pixner.net/aikeu/assets/images/partner/five.png",
    },
];

const Partners = () => {
    return (
        <div className="py-10">
            <h1
                className={`text-4xl font-[700] font-Inter  font-Monserrat text-center`}
            >
                Đối tác đồng hành cùng cúng tôi
            </h1>
            <div className="w-full flex justify-center pt-3">
                <div className="w-[50px] h-[2px] bg-[#64ff4b]" />
            </div>
            <Marquee className="w-full my-10">
                {partners.map((i) => (
                    <Image
                        src={i.url}
                        alt=""
                        width={100}
                        height={100}
                        key={i.url}
                        className="mx-14 grayscale-[100%] w-[120px] h-[120px] 
                        object-contain hover:grayscale-0 transition-opacity cursor-pointer"
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Partners;
