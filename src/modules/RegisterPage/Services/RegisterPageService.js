import { BASE_URL } from "../../Core/config";

export default class RegisterPageService {
    async register(accountData) {
        const url = `${BASE_URL}/register`;
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
