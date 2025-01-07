'use server'
import { promises as fs } from "fs";
import path from "path";

export async function getLocation(): Promise<Location[]> {
    try {
        const data = await fs.readFile(
            path.join(process.cwd(), "data/VN-location-data.json")
        );

        const location = JSON.parse(data.toString());
        return await location;
    } catch (error) {
        console.error("Error fetching the JSON data:", error);
        throw error;
    }
}