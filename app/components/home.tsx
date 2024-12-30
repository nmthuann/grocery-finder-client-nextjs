"use client";

import About from "./about";
import AdvertisingCampaign from "./advertising-campaign";
import CategoryList from "./category-list";
import GridBillboard from "./grid-billboard";
import Introduce from "./introduce";
import Partners from "./partners";
import SellersBanner from "./seller-banner";

export function HomeDisplay() {
    return (
        <div>
            <div className="banner">
                <Introduce />
            </div>
            <div className="w-[95%] md:w-[90%] xl:w-[80%] 2xl:w-[75%] m-auto">
                <About />
            </div>
            <CategoryList />
            <AdvertisingCampaign />
            <Partners />
            <SellersBanner />
            <br />
            <br />
            <GridBillboard />
        </div>
    );
}
