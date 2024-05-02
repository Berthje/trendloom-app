import { BASE_URL } from "@/modules/Core/config";

export default class AccountProfileService {
    async getProfileData() {
        const url = new URL(`${BASE_URL}/profile`);
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
