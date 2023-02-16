import axios from "axios";

class AuthService {
  baseURL = process.env.REACT_APP_API_URL;

  login(params) {
    return axios.post(`${this.baseURL}/v1/auth/login`, params);
  }
  register(params) {
    return axios.post(`${this.baseURL}/v1/auth/register`, params);
  }
  forgotPassword(params) {
    return axios.post(`${this.baseURL}/v1/auth/forgot-password`, params);
  }
}

export default new AuthService();
