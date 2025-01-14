"use client";

import InsightRoll from "./insight-roll";

import NavbarMobileComponent from "./navbar-mobile";

import { NavbarMain } from "./navbar-main";
import { Category } from "@/types/products.type";
const insights: string[] = [
    "1000+ Sản phẩm đa dạng 🛒",
    "Hơn 24 năm phục vụ khách hàng 🎉",
    "Khách hàng hài lòng 😊",
    "Giao hàng nhanh chóng 🚚",
    "Ưu đãi đặc biệt hàng tháng 🎁",
    "Hỗ trợ tận tâm 24/7 📞",
    "Nơi mua sắm tin cậy cho mọi gia đình 🏡"
];

interface HeaderProps {
    location: Location[];
    categories: Category[];
}

export const Header: React.FC<HeaderProps> = ({ location, categories }) => {
    return (
        <header>
            <InsightRoll insights={insights} />
            <div className="hidden md:block xl:py-0">
                <NavbarMain location={location} />
            </div>
            <div className="sm:hidden">
                <NavbarMobileComponent
                    location={location}
                    categories={categories}
                />
            </div>
        </header>
    );
};

export default Header;
