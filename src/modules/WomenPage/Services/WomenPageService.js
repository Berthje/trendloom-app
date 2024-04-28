import { BASE_URL } from "../../Core/config";

export default class WomenPageService {
    async allProducts(filterOptions) {
        const url = new URL(`${BASE_URL}/categories/1/products`);
        url.searchParams.append("sort", filterOptions.sorting);
        url.searchParams.append("itemCount", filterOptions.itemCount);

        const response = await fetch(url);

        return response.json();
    }
}
