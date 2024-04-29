import { BASE_URL } from "../../Core/config";

export default class BrandDetailPageService {
    async allProducts(filterOptions, brandId) {
        const url = new URL(`${BASE_URL}/brands/${brandId}/products`);
        url.searchParams.append("sort", filterOptions.sorting);
        url.searchParams.append("itemCount", filterOptions.itemCount);

        const response = await fetch(url);

        return response.json();
    }

    async getBrand(brandId) {
        const url = `${BASE_URL}/brands/${brandId}`;

        const response = await fetch(url);

        return response.json();
    }
}
