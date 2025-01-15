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
    params: Promise<{ categoryUrl: string }>;
}) => {
    const { categoryUrl } = await params;

    if (!categoryUrl) {
        return <NotFoundComponent />;
    }
    try {
        const categories = await getCategories();
        const findCategory = categories.find(
            (cat) => cat.categoryUrl === `/${categoryUrl}`
        );

        let productCards: ProductResponse[] = [];
        if (findCategory) {
            productCards = await getProductsByCategory(
                findCategory.categoryName
            );
            return (
                <Suspense fallback={<Loading />}>
                    <CategoryExplorer
                        categories={categories}
                        productCards={productCards}
                    />
                </Suspense>
            );
        } else {
            return (
                <ErrorComponent
                    title="Category Page"
                    message={`Failed to load Categories or Products. Not Found /${categoryUrl} . Please try again later.`}
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
