'use server'
import { Category } from "@/types/products.type";
import { promises as fs } from "fs";
import path from "path";

export async function getCategories(): Promise<Category[]> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/categories.json")
        );

        const categories = JSON.parse(data.toString());
        return await categories;
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}