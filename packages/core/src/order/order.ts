import OrderDelivery from "./order-delivery";
import OrderItem from "./order-item";
import { PaymentMethod } from "./payment-method";
import { Status } from "./status";

export default interface Order {
    id: number;
    date: Date;
    items: OrderItem[];
    total: number;
    status: Status;
    paymentMethod: PaymentMethod;
    delivery: OrderDelivery;
}
