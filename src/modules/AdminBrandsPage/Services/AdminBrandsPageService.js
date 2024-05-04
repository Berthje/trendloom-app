import BasePageService from "../../Core/BasePageService";
import { getFetchOptions } from "@/modules/Core/helpers";
import { BASE_URL } from "../../Core/config";

export default class AdminBrandsPageService extends BasePageService {
    allBrands(filterOptions) {
        return super.all("brands", filterOptions);
    }

    async deleteBrands(brandId) {
        const url = `${BASE_URL}/admin/brands/${brandId}`;
        const response = await fetch(url, getFetchOptions("DELETE"));

        return response;
    }
}
