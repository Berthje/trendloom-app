import BasePageService from "../../Core/BasePageService";
export default class MenPageService extends BasePageService {
    allCategories() {
        return super.all("categories");
    }
}
