import BasePageService from "../../Core/BasePageService";

export default class KidsPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.all("categories/3/products", filterOptions);
    }
}
