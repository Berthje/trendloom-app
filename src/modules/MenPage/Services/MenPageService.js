import { BASE_URL } from "../../Core/config";

export default class MenPageService {
    async allProducts(filterOptions) {
        const url = new URL(`${BASE_URL}/products`);
        url.searchParams.append("sort", filterOptions.sorting);
        url.searchParams.append("itemCount", filterOptions.productCount);

        const response = await fetch(url);
        
        return response.json();
    }
}
