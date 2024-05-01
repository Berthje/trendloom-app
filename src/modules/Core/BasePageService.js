import { BASE_URL } from "./config";

export default class BasePageService {
    async allProducts(path, filterOptions) {
        const url = new URL(`${BASE_URL}/${path}`);
        url.searchParams.append("sort", filterOptions.sorting);
        url.searchParams.append("itemCount", filterOptions.itemCount);

        const response = await fetch(url);

        return response.json();
    }

    async fetchPaginatedProducts(url) {
        const response = await fetch(url);
        console.log(response)
        return response.json();
    }
}
