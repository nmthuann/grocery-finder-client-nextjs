"use client";
import Currency from "@/components/customs/currency";
import { truncateText } from "@/lib/utils";
import { ProductResponse } from "@/types/responses/product-card.response.type";
import { Card, CardFooter, Checkbox, Chip, Image } from "@nextui-org/react";

interface ProductOptionCheckboxProps {
    option: ProductResponse;
    isSelected: boolean;
    onOptionChange: () => void;
}

export const ProductOptionCheckbox: React.FC<ProductOptionCheckboxProps> = ({
    option,
    isSelected,
    onOptionChange,
}) => {
    const skuName = option.productName;
    const truncatedSkuName = truncateText(skuName, 35);
    const discountPercentage = option.importPrice
        ? Math.round(
              ((option.importPrice - option.salePrice) / option.importPrice) *
                  100
          )
        : null;
    return (
        <div>
            <Card isFooterBlurred radius="lg" className="border-none">
                <Image
                    alt={option.productName}
                    className="object-cover"
                    height={200}
                    src={option.productThumb}
                    width={200}
                />
                <CardFooter
                    className=" 
                    justify-between 
                    before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 
                    absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] 
                    shadow-small ml-1 z-10
                    "
                >
                    <p className="text-small font-bold text-slate-900">
                        {truncatedSkuName}
                    </p>
                </CardFooter>
            </Card>
            <div className="flex flex-col gap-2 text-small mt-2">
                <Checkbox
                    isSelected={isSelected}
                    onValueChange={onOptionChange}
                    color="primary"
                >
                    {<Currency value={option.salePrice.toString()} />}
                </Checkbox>
                {option.importPrice > option.salePrice && (
                    <div className="flex items-center gap-2">
                        <span className="text-tiny text-default-400 line-through">
                            {option.importPrice} đ
                        </span>

                        <Chip color="danger" size="sm" variant="flat">
                            <p className="font-bold">-{discountPercentage}%</p>
                        </Chip>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductOptionCheckbox;
