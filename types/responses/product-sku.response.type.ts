export type ProductSkuResponse = {
    id: number;
    slug: string;
    barcode: string;
    skuName: string;
    skuAttributes: string;
    image: string;
    status: boolean;
    stock: number;
    latestPrice: number;
    oldPrice: number;
    unit: string;
};