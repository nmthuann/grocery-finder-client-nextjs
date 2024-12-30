import { Product } from "../products.type";
import { ProductCardResponse } from "./product-card.response.type";

export type SpuSkuMappingResponse = {
    spu: Product;
    skus: ProductCardResponse[];
}