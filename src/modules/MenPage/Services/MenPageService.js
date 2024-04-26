import { BASE_URL } from '../../Core/config';

export default class MenPageService {
    async allProducts() {
        const url = `${BASE_URL}/categories/2/products`;
        const response = await fetch(url);
        return response.json();
    }
}