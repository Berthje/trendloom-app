import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";
import { BASE_URL } from "../../Core/config";
import { fetchWithLang, formatDate } from "../../Core/helpers";

export default class ProductDetailPage {
    authService = new AuthenticationService();

    async getProduct(productId) {
        const url = `${BASE_URL}/products/${productId}`;
        const response = await fetchWithLang(url);
        const data = await response.json();
        return data;
    }

    async placeOrder(orderData) {
        const { product, quantity, size, customer } = orderData;

        const url = `${BASE_URL}/orders`;
        //ADDRESS ID MUST BE FROM CUSTOMER, TEMP 1 TO TEST -> customer.data.address_id
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
            body: JSON.stringify({
                customer_id: customer.data.id,
                address_id: 1,
                coupon_id: null,
                order_date: formatDate(new Date()),
                status: "not_completed",
                amount_products: 0,
                total_price: 0.0,
                payment_method: "unknown",
                shipping_method: "unknown",
                tracking_number: null,
            }),
        });

        if (response.status === 201) {
            const order = await response.json();
            this.placeOrderItem(product, quantity, size, customer, order.id);
        }
    }

    async placeOrderItem(product, quantity, size, customer, orderId) {
        //then create a order_item with /order_items endpoint with order_id and product_id and product_size_id and product_details (json), the quantity
        const url = `${BASE_URL}/order-items`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
            body: JSON.stringify({
                order_id: orderId,
                product_id: product.id,
                product_size_id: size.id,
                product_details: JSON.stringify(product),
                quantity: quantity,
            }),
        });

        console.log(response)

        //then update the order with /orders endpoint with the order_id and update the amount_products and total price
    }
}
