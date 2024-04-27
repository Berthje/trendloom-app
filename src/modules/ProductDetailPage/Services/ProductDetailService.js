import { BASE_URL } from '../../Core/config';

export default class ProductDetailPage {
    async getProduct(productId) {
        const url = `${BASE_URL}/products/${productId}`;
        const response = await fetch(url);
        return response.json();
    }
}