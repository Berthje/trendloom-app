import { BASE_URL } from "../../Core/config";

export default class AuthenticationService {
    validateEmail(email) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return email && emailRegex.test(email);
    }

    validatePassword(password) {
        return password && password.length >= 8;
    }

    async login(accountData) {
        const response = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "credentials": "include",
            },
            credentials: "include",
            body: JSON.stringify(accountData),
        });

        return response.json();
    }

    async register(accountData) {
        const response = await fetch(`${BASE_URL}/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(accountData),
        });

        return response.json();
    }

    async getProfile() {
        const response = await fetch(`${BASE_URL}/profile`);
        const data = await response.json();

        return data;
    }

    async isLoggedIn() {
        const response = await fetch(`${BASE_URL}/profile`);
        const data = await response.json();

        return !data.error;
    }
}
