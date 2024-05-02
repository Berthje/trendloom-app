import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";
import { BASE_URL } from "@/modules/Core/config";

export default class AccountProfileService {
    authService = new AuthenticationService();
    initialData = {};

    async getProfileData() {
        const profile = await this.authService.getProfile();
        const url = new URL(`${BASE_URL}/customers/${profile.data.id}`);
        const response = await this.fetchData(url);
        this.initialData = response;
        return response;
    }

    async fetchData(url) {
        const response = await fetch(url, {
            method: "GET",
            headers: this.getHeaders(),
            credentials: "include",
        });
        return await response.json();
    }

    getHeaders() {
        return {
            "Content-Type": "application/json",
            Accept: "application/json",
            credentials: "include",
        };
    }

    async save(type, data) {
        const saveMethods = {
            personalDetails: this.savePersonalDetails,
            address: this.saveAddress,
            password: this.savePassword,
        };
        if (saveMethods[type]) {
            await saveMethods[type].call(this, data);
        }
    }

    async savePersonalDetails(data) {
        const updatedFields = this.getUpdatedFields(data, this.initialData[0]);
        const profile = await this.authService.getProfile();
        const url = new URL(`${BASE_URL}/customers/${profile.data.id}`);
        return await this.putData(url, updatedFields);
    }

    async saveAddress(data) {
        const profile = await this.authService.getProfile();
        const addressExists = profile.data.address_id;

        const initialAddressData = this.initialData[0]?.address || {};
        const updatedFields = this.getUpdatedFields(data, initialAddressData);

        if (addressExists) {
            const url = new URL(
                `${BASE_URL}/addresses/${profile.data.address_id}`
            );
            return await this.putData(url, updatedFields);
        } else {
            const url = new URL(`${BASE_URL}/addresses`);
            const response = await this.postData(url, updatedFields);
            const { id } = await response.json();

            const customerUrl = new URL(
                `${BASE_URL}/customers/${profile.data.id}`
            );
            return await this.putData(customerUrl, {
                address_id: id,
            });
        }
    }

    async putData(url, updatedFields) {
        const response = await fetch(url, {
            method: "PUT",
            headers: this.getHeaders(),
            credentials: "include",
            body: JSON.stringify(updatedFields),
        });
        return response;
    }

    async postData(url, data) {
        const response = await fetch(url, {
            method: "POST",
            headers: this.getHeaders(),
            credentials: "include",
            body: JSON.stringify(data),
        });
        return response;
    }

    getUpdatedFields(data, initialData) {
        return data.reduce((obj, field) => {
            if (field.value !== initialData[field.id]) {
                return { ...obj, [field.id]: field.value };
            }
            return obj;
        }, {});
    }

    async savePassword(data) {
        console.info("!!TO BE IMPLEMENTED LATER, NOT MVP!!");
    }
}
