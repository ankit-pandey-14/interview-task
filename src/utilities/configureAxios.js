import axios from 'axios';

const configureAxios = () =>
    axios.create({
        baseURL: '',
        // base url used when the API of the entire application are hosted at a single place
        timeout: 25000,
    });

const axiosInstance = configureAxios();

axiosInstance.interceptors.request.use((config) => config);

axiosInstance.interceptors.response.use(
    (response) => response.data,
    (err) => {
        console.log(err);
        // instead of using console logs
        // user can be notified with respective errors caused
        // usng notifications or alerts or messages.
        // err.response
        // err.response.data
        // err.response.data.message
        // err.response.status --> to apply some specifc status is given for some speccific errors
    }
);

export default axiosInstance;