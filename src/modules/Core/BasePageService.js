import { BASE_URL } from "./config";
import { fetchWithLang } from "./helpers";

export default class BasePageService {
    async all(path, filterOptions) {
        const url = new URL(`${BASE_URL}/${path}`);
        if (filterOptions) {
            url.searchParams.append("sort", filterOptions.sorting);
            url.searchParams.append("itemCount", filterOptions.itemCount);
        }
        const response = await fetchWithLang(url);

        return response.json();
    }

    async fetchPaginatedProducts(url) {
        const response = await fetchWithLang(url);
        return response.json();
    }
}
