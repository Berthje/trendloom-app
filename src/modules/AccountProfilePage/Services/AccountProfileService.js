import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";
import { BASE_URL } from "@/modules/Core/config";

export default class AccountProfileService {
    authService = new AuthenticationService();
    initialData = {};

    async getProfileData() {
        const profile = await this.authService.getProfile();
        const url = new URL(`${BASE_URL}/customers/${profile.data.id}`);
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
        });

        const data = await response.json();
        this.initialData = data;
        return data;
    }

    async save(type, data) {
        switch (type) {
            case "personalDetails":
                await this.savePersonalDetails(data);
                break;
            case "address":
                await this.saveAddress(data);
                break;
            case "password":
                await this.savePassword(data);
                break;
        }
    }

    async savePersonalDetails(data) {
        const updatedFields = data.reduce((obj, field) => {
            if (field.value !== this.initialData[0][field.id]) {
                return { ...obj, [field.id]: field.value };
            }
            return obj;
        }, {});
        const profile = await this.authService.getProfile();
        const url = new URL(`${BASE_URL}/customers/${profile.data.id}`);
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
            body: JSON.stringify(updatedFields),
        });

        return response;
    }

    async saveAddress(data) {
        const updatedFields = data.reduce((obj, field) => {
            if (field.value !== this.initialData[0]["address"][field.id]) {
                return { ...obj, [field.id]: field.value };
            }
            return obj;
        }, {});
        const profile = await this.authService.getProfile();
        const url = new URL(`${BASE_URL}/addresses/${profile.data.address_id}`);
        console.log(JSON.stringify(updatedFields));
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
            body: JSON.stringify(updatedFields),
        });

        return response;
    }

    async savePassword(data) {
        console.log("!!TO BE IMPLEMENTED LATER, NOT MVP!!")
    }
}
