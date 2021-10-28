import axios from "axios";

const callApi = async(method, path, data, jwt, params = {}) => {
    const headers = {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
    };
    const baseUrl = "http://127.0.0.1:8000/api/v1";
    const fullUrl = `${baseUrl}${path}`;
    if (method === "get" || method === "delete") {
        return axios[method](fullUrl, { headers, params });
    } else {
        return axios[method](fullUrl, data, { headers });
    }
};

export default {
    createAccount: (form) => callApi("post", "/users/", form),
    login: (form) => callApi("post", "/users/login/", form),
    posts: (page = 1, token) =>
        callApi("get", `/post/?page=${page}`, null, token),
    favs: (id, token) => callApi("get", `/users/${id}/bookmark/`, null, token),
    search: (form, token) => callApi("get", "/post/search/", null, token, form),
};