import BasePageService from "../../Core/BasePageService";
export default class MenPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.allProducts("categories/2/products", filterOptions);
    }
}
