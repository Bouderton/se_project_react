const baseUrl = "http://localhost:3001";

const checkResponse = (res) => {
    return res.ok ? res.json(): Promise.reject(`Error ${res.status}`);
}

const getItems = () => { 
    return fetch(`${baseUrl}/items`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }).then((res) => (checkResponse(res))); 
}

const api = {
    getItems,
}

export default api;