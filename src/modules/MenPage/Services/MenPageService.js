import BasePageService from "../../Core/BasePageService";
export default class MenPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.all("categories/2/products", filterOptions);
    }
}
