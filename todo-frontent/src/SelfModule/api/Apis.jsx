import { API_BASE_URL } from "../../config"

export const postRequest = async (route, data) => {
    try {
        const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
        const res = await fetch(`${API_BASE_URL}/${route}/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data),
        });
        const result = await res.json();
        console.log(result);
        return result;

    } catch (error) {
        console.log(error);
    }
}

export const getRequest = async (route) => {
    try {
        const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
        const res = await fetch(`${API_BASE_URL}/${route}/`, {
            method: "POST",
            headers: `Bearer ${token}`,
        });
        const data = await res.json();
        return data;
    } catch (error) {
        return error;
    }
}