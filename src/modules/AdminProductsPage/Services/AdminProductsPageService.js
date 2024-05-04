import BasePageService from "../../Core/BasePageService";
import { getFetchOptions } from "@/modules/Core/helpers";
import { BASE_URL } from "../../Core/config";

export default class AdminProductsPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.all("products", filterOptions);
    }

    async deleteProduct(productId) {
        const url = `${BASE_URL}/admin/products/${productId}`;
        const response = await fetch(url, getFetchOptions("DELETE"));
        
        return response;
    }
}
