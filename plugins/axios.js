import Axios from 'axios'

// Config api web
const Api = Axios.create({
  baseURL: 'https://www.eli5.io',
  withCredentials: true,
});
// Start progress bar
Api.interceptors.request.use((config) => {
  return config
});

// Finish or Fail progress bar
Api.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error.response.data);
});
export { Api, Axios }