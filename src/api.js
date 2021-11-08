import axios from "axios";
const api = (axios.defaults.baseURL = "http://127.0.0.1:8000/v1"); // django 서버 주소

export default {
    getAllPosts() {
        return axios.get("/post/");
    },
};