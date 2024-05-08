import BasePageService from "../../Core/BasePageService";
import { getFetchOptions } from "@/modules/Core/helpers";
import { BASE_URL } from "../../Core/config";

export default class AdminBrandsPageService extends BasePageService {
    async allBrands(filterOptions) {
        return super.all("brands", filterOptions);
    }

    async getBrand(brandId, languages) {
        const brand = {};

        for (const lang of languages) {
            const url = `${BASE_URL}/brands/${brandId}?lang=${lang}`;
            const response = await fetch(url, getFetchOptions("GET"));
            const data = await response.json();

            brand[lang] = data;
        }

        return brand;
    }

    async deleteBrand(brandId) {
        const url = `${BASE_URL}/admin/brands/${brandId}`;
        const response = await fetch(url, getFetchOptions("DELETE"));

        return response;
    }

    async addBrand(brand) {
        const url = `${BASE_URL}/admin/brands`;
        const response = await fetch(url, getFetchOptions("POST", brand));

        return response;
    }
}
