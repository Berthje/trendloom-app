import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";
import { BASE_URL } from "@/modules/Core/config";

export default class AccountProfileService {
    authService = new AuthenticationService();

    async getProfileData() {
        const profile = await this.authService.getProfile();
        const url = new URL(`${BASE_URL}/customers/${profile.data.id}`);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "credentials": "include"
            },
            credentials: "include"
        });

        return response.json();
    }
}
