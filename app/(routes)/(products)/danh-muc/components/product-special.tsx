"use client";
import { Button } from "@nextui-org/react";
import { KanbanSquareDashed, Undo } from "lucide-react";
import { useRouter } from "next/navigation";
import ProductCard from "../../[categoryUrl]/[slug]/components/product-card";
import { ProductResponse } from "@/types/responses/product-card.response.type";

interface ProductSpecialProps {
    productResponses: ProductResponse[];
}

const ProductSpecial: React.FC<ProductSpecialProps> = ({
    productResponses,
}) => {
    const router = useRouter();
    return (
        <div className="ml-5 mr-5">
            <div className="flex items-center justify-between mt-4 mb-4">
                <h2 className="text-[#64ff4b] font-bold text-2xl sm:text-3xl md:text-4xl">
                    Sản Phẩm nổi bật
                </h2>
            </div>
            <div>
                <div
                    className="
                grid
                grid-cols-1
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5
                gap-2
                ml-5 mr-5
           
                "
                >
                    {productResponses.length > 0 ? (
                        productResponses.map(
                            (productCard: ProductResponse, i) => (
                                <div key={i}>
                                    <ProductCard
                                        key={productCard.id}
                                        data={productCard}
                                    />
                                </div>
                            )
                        )
                    ) : (
                        <div
                            className="
                        flex flex-col items-center justify-center
                        col-span-full text-center py-20
                        "
                        >
                            <KanbanSquareDashed className="text-gray-500 w-16 h-16 mb-4" />
                            <p className="text-lg text-gray-600">
                                Hiện tại không có sản phẩm nào.
                            </p>
                            <Button
                                color="warning"
                                size="lg"
                                className="mt-6 font-semibold text-base"
                                onPress={() => router.push("/")}
                                endContent={<Undo />}
                                aria-label="Quay lại trang chủ"
                            >
                                Quay lại trang chủ
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductSpecial;
