import { BASE_URL } from "../../Core/config";

export default class LoginPageService {
    async login(accountData) {
        const url = `${BASE_URL}/login`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(accountData)
        });
        const data = await response.json();
        return data;
    }
}
