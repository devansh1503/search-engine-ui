import axios from "axios";

const API_BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const searchAPI = {
    query: (q) =>
        api.get(`/search?query=${q}`)
}