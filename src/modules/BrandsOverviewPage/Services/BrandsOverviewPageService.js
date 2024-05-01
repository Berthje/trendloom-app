import { BASE_URL } from "../../Core/config";
import { fetchWithLang } from '../../Core/helpers';

export default class BrandsOverviewPageService {
    async allBrands() {
        const url = `${BASE_URL}/brands`;
        const response = await fetchWithLang(url);
        return response.json();
    }
}
