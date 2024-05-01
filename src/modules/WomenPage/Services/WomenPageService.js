import BasePageService from "../../Core/BasePageService";

export default class WomenPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.all("categories/1/products", filterOptions);
    }
}
