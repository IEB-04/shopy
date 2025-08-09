import axios from "axios";

const callApi = () => {
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:5000/api'
    })

    axiosInstance.interceptors.request.use(
        (config) => {

            //manage validation
            return config;
        },

        err => Promise.reject(err)
    )

    return axiosInstance
}

export default callApi;