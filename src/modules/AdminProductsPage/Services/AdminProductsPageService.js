import BasePageService from "../../Core/BasePageService";

export default class AdminProductsPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.all("products", filterOptions);
    }
}
