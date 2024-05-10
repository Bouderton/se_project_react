export const checkResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
};

export const baseUrl = "http://localhost:3001";

const getItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

const addItem = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  }).then(checkResponse);
};

const deleteItem = ({ _id }) => {
  return fetch(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
};

// ADD SIGNIN AND SIGNUP FETCHES

const api = {
  getItems,
  addItem,
  deleteItem,
};

export default api;
