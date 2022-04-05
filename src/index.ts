import CategoryService from "./n11/Services/CategoryService";
import ProductService from "./n11/Services/ProductService";
import ProductStockService from "./n11/Services/ProductStockService";
import ProductSellingService from "./n11/Services/ProductSellingService";
import ShipmentService from "./n11/Services/ShipmentService";
import OrderService from "./n11/Services/OrderService";

const n11 = { CategoryService, ProductService, ShipmentService, ProductStockService, ProductSellingService, OrderService };

export default n11;
export { CategoryService, ProductService, ShipmentService, ProductStockService, ProductSellingService, OrderService };
module.exports = n11;
