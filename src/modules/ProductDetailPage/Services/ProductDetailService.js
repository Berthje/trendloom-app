import { BASE_URL } from "../../Core/config";
import { fetchWithLang } from '../../Core/helpers';

export default class ProductDetailPage {

    async getProduct(productId) {
        const url = `${BASE_URL}/products/${productId}`;
        const response = await fetchWithLang(url);
        const data = await response.json();
        return data;
    }
}
