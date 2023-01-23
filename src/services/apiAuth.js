import axios from "axios"

const REACT_APP_API_URL = "http://localhost:5000"

function login(body) {
    const promise = axios.post(`${REACT_APP_API_URL}/login`, body)
    return promise
}

function register(body) {
    const promise = axios.post(`${REACT_APP_API_URL}/register`, body)
    return promise
}

const apiAuth = { login, register } 
export default apiAuth
