import BasePageService from "../../Core/BasePageService";
export default class ShopPageService extends BasePageService {
    allProducts(filterOptions) {
        return super.allProducts("products", filterOptions);
    }
}
