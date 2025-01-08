import { getProductResponse } from "@/actions/get-product";
import Billboard from "./components/billboard";
import CategoryList from "./components/category-list";
import ProductSpecial from "./components/product-special";
import Partners from "@/app/components/partners";

const CategoryMainPage = async () => {
    const productResponses = await getProductResponse();
    return (
        <div>
            <Billboard />
            <CategoryList />
            <ProductSpecial productResponses={productResponses} />
            <Partners />
        </div>
    );
};

export default CategoryMainPage;
