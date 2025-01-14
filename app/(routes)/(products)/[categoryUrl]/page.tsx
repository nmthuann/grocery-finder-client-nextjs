import Loading from "@/app/loading";
import { Suspense } from "react";
import CategoryExplorer from "./components/category-explorer";
import { getCategories } from "@/actions/get-categories";
import NotFoundComponent from "@/components/errors/not-found-component";
import { ProductResponse } from "@/types/responses/product-card.response.type";
import { getProductsByCategory } from "@/actions/get-products-by-category";
import { ErrorComponent } from "@/components/errors/error-component";

const CategoryPage = async ({
    params
}: {
    params: { categoryUrl: string };
}) => {
    const paramUrl = params.categoryUrl;
    console.log("paramUrl", paramUrl);
    if (paramUrl === undefined) {
        return <NotFoundComponent />;
    }
    try {
        const categories = await getCategories();
        const findCategory = categories.find(
            (cat) => cat.categoryUrl === `/${paramUrl}`
        );

        let productCards: ProductResponse[] = [];
        if (findCategory) {
            productCards = await getProductsByCategory(
                findCategory.categoryName
            );
            return (
                <div>
                    <Suspense fallback={<Loading />}>
                        <CategoryExplorer
                            categories={categories}
                            productCards={productCards}
                        />
                    </Suspense>
                </div>
            );
        } else {
            return (
                <ErrorComponent
                    title="Category Page"
                    message={`Failed to load Categories or Products. Not Found /${params.categoryUrl} . Please try again later.`}
                />
            );
        }
    } catch (error: unknown) {
        console.log(error);
        return (
            <ErrorComponent
                title="Category Page"
                message="Failed to load Categories or Products. Please try again later."
            />
        );
    }
};

export default CategoryPage;
