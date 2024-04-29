import BasePageService from "../../Core/BasePageService";

export default class WomenPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.allProducts("categories/1/products", filterOptions);
    }
}
