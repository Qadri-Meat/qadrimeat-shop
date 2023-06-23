import { HTTPBaseService } from "./HTTPBaseService";

class OrderService extends HTTPBaseService {
  create(data) {
    return this.instance.post(`/v1/orders`, data);
  }
}

export default new OrderService();
