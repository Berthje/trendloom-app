import { BASE_URL } from "../../Core/config";

export default class KidsPageService {
    async allProducts(filterOptions) {
        const url = new URL(`${BASE_URL}/categories/3/products`);
        url.searchParams.append("sort", filterOptions.sorting);
        url.searchParams.append("itemCount", filterOptions.itemCount);

        const response = await fetch(url);

        return response.json();
    }
}
