import axios from "axios";
import { useNavigate } from "react-router-dom";
import TokenService from "./TokenService";

export class HTTPBaseService {
  baseURL = process.env.REACT_APP_API_URL;

  constructor() {
    this.instance = axios.create({
      baseURL: `${this.baseURL}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.initializeRequestInterceptor();
    this.initializeResponseInterceptor();
  }

  initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest);
  };

  initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use((response) => {
      return response;
    }, this.handleError);
  };

  handleRequest = (config) => {
    config.headers["Authorization"] = `Bearer ${TokenService.getAccessToken()}`;

    return config;
  };

  handleError = async (error) => {
    const originalConfig = error.config;

    const refreshToken = TokenService.getRefreshToken();
    if (
      error.response?.status === 401 &&
      originalConfig.url !== "/auth/login"
    ) {
      if (refreshToken !== null) {
        await this.refreshToken(refreshToken);
        const accessToken = TokenService.getAccessToken();
        if (accessToken) {
          return this.instance(originalConfig);
        }
      } else {
        TokenService.removeUserData();
        const navigate = useNavigate();
        navigate("/login");
      }
    }

    return Promise.reject(error);
  };

  refreshToken(refreshToken) {
    return axios
      .post(`${this.baseURL}/v1/auth/refresh-tokens`, {
        refreshToken,
      })
      .then(
        (response) => {
          TokenService.setTokens(response.data);
        },
        (error) => {
          console.log(error.message);
          TokenService.removeUserData();
          const navigate = useNavigate();
          navigate("/login");
        }
      );
  }
}
