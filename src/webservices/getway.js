import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://log-g5ki.vercel.app",
    headers:{
        'Content-Type': 'application/json'
    }
})

export default axiosClient;