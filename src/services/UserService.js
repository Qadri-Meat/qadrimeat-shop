import formData from "helpers/form-data";
import { HTTPBaseService } from "./HTTPBaseService";

class UserService extends HTTPBaseService {
  get(id) {
    return this.instance.get(`/v1/users/${id}`);
  }

  update(data) {
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    return this.instance.patch(`/v1/users`, formData(data), config);
  }
}

export default new UserService();
