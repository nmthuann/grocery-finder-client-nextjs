export type Sku = {
  id: number;
  barcode: string;
  skuName: string;
  slug: string;
  skuDescription: string;
  image: string;
  status: boolean;
  skuAttributes: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export type Price = {
  beginAt: Date;
  unitPrice: number;
  createdAt: Date;
};

export type Brand = {
  id: number;
  name: string;
  description: string;
  brandBusiness: string;
};

export type Category = {
  id: number;
  categoryName: string;
  description: string;
  categoryUrl: string;
  parentId: string;
  leftValue: number;
  rightValue: number;
};

export type Product = {
  id: string;
  productName: string;
  productLine: string;
  description: string;
  isDeleted: boolean;
  prioritySort: number;
  productSpecs: string;
  category: Category;
  brand: Brand;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  modifiedBy: string;
};

export type Supplier = {
  id: number;
  supplierName: string;
  address: string;
  phoneNumber: string;
  email: string;
  contactPerson: string;
  description: string;
};

export type Inventory = {
  id: string;
  stock: number;
  defective: number;
  sold: number;
  unit: string;
  supplier: Supplier;
};


export type EAV = {
  attribute: string;
  value: string;
};

export type SearchProductResponse = {
  id: string;
  skuName: string;
  slug: string;
  categoryUrl: string;
}

export type SkuDetail = {
  productSku: Sku;
  prices: Price[];
  inventory: Inventory;
}

export type Pro = {
  productSku: Sku;
  prices: Price[];
  inventory: Inventory;
}