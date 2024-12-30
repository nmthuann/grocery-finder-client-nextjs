"use client";
import Image, { StaticImageData } from "next/image";

interface CategoryIconProps {
    path: StaticImageData;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ path }) => {
    return (
        <Image
            src={path}
            alt="icon"
            width={32}
            height={32}
            className="hover:scale-125 transition-all ease-in-out"
        />
    );
};
