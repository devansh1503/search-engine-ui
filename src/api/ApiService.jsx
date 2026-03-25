import axios from "axios";

const API_BASE_URL = "http://localhost:8080";
const AUTOCOMPLETE_URL = "http://localhost:8084";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

const api_autocomplete = axios.create({
    baseURL: AUTOCOMPLETE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})

export const searchAPI = {
    query: (q) =>
        api.get(`/search?query=${q}`)
}

export const autocompleteAPI = {
    query: (q) =>
        api_autocomplete.get(`/autocomplete?query=${q}`)
}