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

    async save(type, data) {
        switch (type) {
            case 'personalDetails':
              await this.savePersonalDetails(data);
              break;
            case 'address':
              await this.saveAddress(data);
              break;
            case 'password':
              await this.savePassword(data);
              break;
          }
    }

    async savePersonalDetails(data) {
        console.log(data);
    }
    async saveAddress(data) {
        console.log(data);
    }
    async savePassword(data) {
        console.log("TO BE IMPLEMENTED", data);
    }
}
