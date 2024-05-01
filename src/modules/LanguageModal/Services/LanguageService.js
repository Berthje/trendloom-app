import { BASE_URL } from "@/modules/Core/config";

export default class LanguageService {
    async getLanguages() {
        const response = await fetch(`${BASE_URL}/languages`);
        return response.json();
    }
}
