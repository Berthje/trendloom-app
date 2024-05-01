import { BASE_URL } from "../../Core/config";
import { fetchWithLang } from '../../Core/helpers';

export default class BrandDetailPageService {
    async allProducts(filterOptions, brandId) {
        const url = new URL(`${BASE_URL}/brands/${brandId}/products`);
        url.searchParams.append("sort", filterOptions.sorting);
        url.searchParams.append("itemCount", filterOptions.itemCount);

        const response = await fetchWithLang(url);

        return response.json();
    }

    async getBrand(brandId) {
        const url = `${BASE_URL}/brands/${brandId}`;

        const response = await fetchWithLang(url);

        return response.json();
    }
}
