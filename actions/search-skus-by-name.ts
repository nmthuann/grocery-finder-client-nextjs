'use server'
import { SystemError } from "@/constants/errors.enum";
import { SearchProductResponse } from "@/types/products.type";


export async function searchSkusByName(key: string): Promise<SearchProductResponse[]> {
    
    const URL = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/products/search?key=${key}` ;

    try {
        const options = {
            method: 'GET',
            next: { revalidate: 300 },
            headers: {
                'X-Rest-Api-Version': `${process.env.NEXT_PUBLIC_BACKEND_VERSION_API}`
            }
        };
         const res = await fetch(URL, options);

        if (!res.ok) {
            console.error(`Error fetching data: ${res.statusText}`);
            throw new Error(SystemError.FETCH_DATA_ERROR);
        }

        const data: SearchProductResponse[] = await res.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
