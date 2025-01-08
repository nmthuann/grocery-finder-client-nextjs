"use client";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { ProductResponse } from "@/types/responses/product-card.response.type";
import Currency from "@/components/customs/currency";

interface ProductCardItemProps {
    data: ProductResponse;
}

const ProductCardItem: React.FC<ProductCardItemProps> = ({ data }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <Card radius="lg" className="w-64 h-96 m-5 p-4 rounded-lg">
            <CardBody className="p-0">
                <Image
                    width="100%"
                    height={140}
                    alt={data.productName}
                    src={data.productThumb}
                />
            </CardBody>
            <CardFooter className="flex flex-col justify-between h-full">
                <h1 className="text-sm font-medium text-gray-700">
                    {data.productName}
                </h1>
                <div className="flex flex-col mt-2">
                    <Currency value={data.salePrice.toString()} />
                    {data.importPrice > data.salePrice && (
                        <div className="flex items-center gap-2">
                            <span className="text-sm line-through text-gray-400">
                                {data.importPrice} đ
                            </span>
                            <span className="text-sm text-red-500">
                                -
                                {Math.round(
                                    ((data.importPrice - data.salePrice) /
                                        data.salePrice) *
                                        100
                                )}
                                %
                            </span>
                        </div>
                    )}
                </div>
                <Button className="mt-2 w-full bg-gradient-to-r from-lime-400 to-green-600">
                    Mua Ngay
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCardItem;
