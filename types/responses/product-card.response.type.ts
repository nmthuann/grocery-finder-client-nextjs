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

export type ProductResponse = {

  id: string;              // Mã định danh duy nhất
  slug: string;            // URL thân thiện cho sản phẩm
  barcode: string;         // Mã vạch sản phẩm
  productName: string;     // Tên sản phẩm
  productThumb: string;    // URL hình ảnh sản phẩm
  category: string;        // Danh mục sản phẩm
  categoryUrl: string;     // URL danh mục
  salePrice: number;       // Giá bán
  importPrice: number;     // Giá nhập
  stock: number;           // Số lượng tồn kho
  sold: number;            // Số lượng đã bán
  isActive: boolean;       // Trạng thái kích hoạt sản phẩm
  description: string;     // Mô tả sản phẩm
  unit: string;            // Đơn vị sản phẩm

}