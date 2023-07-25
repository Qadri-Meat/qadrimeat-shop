import { HTTPBaseService } from "./HTTPBaseService";

class OrderService extends HTTPBaseService {
  create(data) {
    return this.instance.post(`/v1/orders`, data);
  }
  get(id) {
    return this.instance.get(`/v1/orders/${id}`);
  }
}

export default new OrderService();
