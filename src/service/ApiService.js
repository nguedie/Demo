import { BASE_URL } from "./Config";



export default async function apiRequest(services, link, method, form, token) {
    let body = JSON.stringify(form)
    const url = BASE_URL[services] + link;

    console.log("url", url);

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    };
    if (form instanceof FormData) {
        headers = {
            Accept: 'application/json',
        };
        body = form;
    }

    if (token) {
        headers = { ...headers, Authorization: `Bearer ${token}` };
    }
    console.log(token);

    let request = new Request(url, {
        mode: "cors",
        method: method,
        headers: headers
    });
    if (method !== 'GET' && method !== 'HEAD') {
        request = new Request(url, {
            mode: "cors",
            method: method,
            headers: headers,
            body
        });
    }

    try {
        const resp = await fetch(request);
        const data = await resp.json();
        return ApiResponse(resp.status, data);
    } catch (error) {
        console.error('Error:', error);
        return ApiResponse(500, { error: 'Internal Server Error' });
    }
}

function ApiResponse(status, data) {
    return {
        status: status,
        body: data,
    };
}
