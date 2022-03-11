import CategoryService from "./n11/Services/CategoryService";
import ProductService from "./n11/Services/ProductService";
import ProductStockService from "./n11/Services/ProductStockService";
import ShipmentService from "./n11/Services/ShipmentService";

const n11 = { CategoryService, ProductService, ShipmentService, ProductStockService };

export default n11;
export { CategoryService, ProductService, ShipmentService, ProductStockService };
module.exports = n11;
