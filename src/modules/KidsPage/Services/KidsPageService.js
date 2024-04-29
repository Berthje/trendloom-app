import BasePageService from "../../Core/BasePageService";

export default class KidsPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.allProducts("categories/3/products", filterOptions);
    }
}
