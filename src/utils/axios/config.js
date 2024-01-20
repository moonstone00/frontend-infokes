import axios from "axios";
import { URL } from "./ApiBaseURL"

const API = axios.create({
    baseURL: URL.backend_URL,
    timeout: 5000
})

export {API as axios}