import axios from "axios";
import { useAuthStore } from "../../stores/auth";


const baseURL = `http://localhost:8000`;
const api = axios.create({baseURL: baseURL})



export default api;