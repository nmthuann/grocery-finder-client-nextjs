export type ProductCardResponse = {
  skuId: number;
  spuId: string;
  slug: string;
  skuName: string;
  skuAttributes: string;
  image: string;
  status: boolean;
  sold: number;
  currentStock: number;
  latestPrice: number;
  oldPrice: number;
  unit: string;
};