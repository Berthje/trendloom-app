export async function getLangCode() {
    const preferredLang = localStorage.getItem("preferredLanguage") || "en";
    const response = await fetch("https://trendloom.test/api/languages");
    const data = await response.json();
    const availableLangs = data.data.map((lang) => lang.code);
    return availableLangs.includes(preferredLang) ? preferredLang : "en";
}

export async function fetchWithLang(url, options) {
    const lang = await getLangCode();
    const urlWithLang = appendLangParam(url, lang);
    return fetch(urlWithLang, options);
}

function appendLangParam(url, lang) {
    const urlObj = new URL(url);
    urlObj.searchParams.append("lang", lang);
    return urlObj.toString();
}

export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}