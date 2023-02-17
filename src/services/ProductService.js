import { HTTPBaseService } from "./HTTPBaseService";

class ProductService extends HTTPBaseService {
  getAll(params) {
    return this.instance.get("/v1/products", { params: { limit: 1000 } });
  }

  get(id) {
    return this.instance.get(`/v1/products/${id}`);
  }
}

export default new ProductService();
