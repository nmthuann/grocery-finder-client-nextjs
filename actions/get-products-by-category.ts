'use server'
import { ProductResponse } from "@/types/responses/product-card.response.type";
import { promises as fs } from "fs";
import path from "path";

export async function getProductsByCategory(category: string): Promise<ProductResponse[]> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/mocks/products.json")
        );

        const products = JSON.parse(data.toString()) as ProductResponse[];

        const productsByCat: ProductResponse[] = products.filter((prod) => prod.category == category);

        return productsByCat;
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}