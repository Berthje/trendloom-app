import { BASE_URL } from '../../Core/config';

export default class BrandsOverviewPageService {
    async allBrands() {
        const url = `${BASE_URL}/brands`;
        const response = await fetch(url);
        return response.json();
    }
}
