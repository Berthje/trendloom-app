import { BASE_URL } from "../../Core/config";

export function validateEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return email && emailRegex.test(email);
}

export function validatePassword(password) {
    return password && password.length >= 8;
}

export async function login(accountData) {
    const response = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(accountData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

export async function register(accountData) {
    const response = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(accountData),
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}
