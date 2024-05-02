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

    async getOrders(customerId) {
        const url = `${BASE_URL}/customers/${customerId}/orders`;
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
        });
        const data = await response.json();
        return data;
    }

    async placeOrder(orderData) {
        const { customer } = orderData;

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
            this.placeOrderItem(orderData, order.id);
        }
    }

    async placeOrderItem(orderData, orderId) {
        const { product, size, quantity } = orderData;
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

        if (response.status === 201) {
            const orderItem = await response.json();
            const updatedData = {
                amount_products: orderItem.quantity,
                total_price: product.price * orderItem.quantity,
            };
            this.updateOrder(orderId, updatedData);
        }
    }

    async updateOrder(orderId, updatedData) {
        const orderUrl = `${BASE_URL}/orders/${orderId}`;
        const orderResponse = await fetch(orderUrl, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "credentials": "include",
            },
            credentials: "include",
        });
        const order = await orderResponse.json();

        const newTotalPrice = parseFloat(order[0].total_price) + parseFloat(updatedData.total_price);
        const newAmountProducts = parseInt(order[0].amount_products) + parseInt(updatedData.amount_products);

        const url = `${BASE_URL}/orders/${orderId}`;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "credentials": "include",
            },
            credentials: "include",
            body: JSON.stringify({
                total_price: newTotalPrice,
                amount_products: newAmountProducts
            }),
        });

        if (response.status === 200) {
            console.log("Order updated successfully");
        }
    }
}
