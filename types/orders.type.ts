export type OrderDetail = {
    quantity: number;
    productId: string; // UUIDs are represented as strings
    productSkuId: number;
};

export type Cart = {
    userId: string;
    quantity: number;
    productId: string; // UUIDs are represented as strings
    productSkuId: number;
};