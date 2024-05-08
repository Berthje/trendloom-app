import BasePageService from "../../Core/BasePageService";
import { getFetchOptions } from "@/modules/Core/helpers";
import { BASE_URL } from "../../Core/config";

export default class AdminCategoriesPageService extends BasePageService {
    allCategories(filterOptions) {
        return super.all("categories", filterOptions);
    }

    async deleteCategory(categoryId) {
        const url = `${BASE_URL}/admin/categories/${categoryId}`;
        const response = await fetch(url, getFetchOptions("DELETE"));

        return response;
    }

    async addCategory(category) {
        const url = `${BASE_URL}/admin/categories`;
        const response = await fetch(url, getFetchOptions("POST", category));

        return response;
    }

    async getCategory(categoryId, languages) {
        const category = {};

        for (const lang of languages) {
            const url = `${BASE_URL}/categories/${categoryId}?lang=${lang}`;
            const response = await fetch(url, getFetchOptions("GET"));
            const data = await response.json();

            category[lang] = data;
        }

        return category;
    }

    async updateCategory(category) {
        const url = `${BASE_URL}/admin/categories/${category.id}`;
        const response = await fetch(url, getFetchOptions("PUT", category));

        return response;
    }
}
