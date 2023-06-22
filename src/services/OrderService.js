import { HTTPBaseService } from "./HTTPBaseService";

class OrderService extends HTTPBaseService {
  create(data) {
    const {
      stock,
      category,
      tag,
      fullDescription,
      shortDescription,
      createdAt,
      id,
      cartItemId,
      ...updatedData
    } = data;

    return this.instance.post(`/v1/orders`, updatedData);
  }
}

export default new OrderService();
