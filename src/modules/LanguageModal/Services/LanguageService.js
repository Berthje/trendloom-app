import { BASE_URL } from "@/modules/Core/config";

export default class LanguageService {
    async getLanguages() {
        const response = await fetch(`${BASE_URL}/languages`);
        return response.json();
    }

    setPreferredLanguage(languageCode) {
        localStorage.setItem("preferredLanguage", languageCode);
    }

    getPreferredLanguage() {
        return localStorage.getItem("preferredLanguage") || "english";
    }

    async getTranslations() {
        const response = await fetch(`${BASE_URL}/translations`);
        const data = await response.json();
        
        return data;
    }
}
