'use server'
import { ProductResponse } from "@/types/responses/product-card.response.type";
import { promises as fs } from "fs";
import path from "path";

export async function getProductResponse(): Promise<ProductResponse[]> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/mocks/products.json")
        );

        const products = JSON.parse(data.toString());
        return await products as ProductResponse[];
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}