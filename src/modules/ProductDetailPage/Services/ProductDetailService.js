import AuthenticationService from "@/modules/Authentication/Services/AuthenticationService";
import { BASE_URL } from "../../Core/config";
import { fetchWithLang, formatDate } from "../../Core/helpers";

export default class ProductDetailService {
    authService = new AuthenticationService();

    getFetchOptions(method, body) {
        return {
            method,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                credentials: "include",
            },
            credentials: "include",
            body: JSON.stringify(body),
        };
    }

    async fetchAndUpdateOrder(orderId, updatedData) {
        const orderUrl = `${BASE_URL}/orders/${orderId}`;
        const orderResponse = await fetch(
            orderUrl,
            this.getFetchOptions("GET")
        );
        const order = await orderResponse.json();

        const newTotalPrice =
            parseFloat(order[0].total_price) +
            parseFloat(updatedData.total_price);
        const newAmountProducts =
            parseInt(order[0].amount_products) +
            parseInt(updatedData.amount_products);

        const updateResponse = await fetch(
            orderUrl,
            this.getFetchOptions("PUT", {
                total_price: newTotalPrice,
                amount_products: newAmountProducts,
            })
        );

        if (updateResponse.status === 200) {
            console.info("Order updated successfully");
        }
    }

    async getProduct(productId) {
        const url = `${BASE_URL}/products/${productId}`;
        const response = await fetchWithLang(url);
        return await response.json();
    }

    async getOrders(customerId) {
        const url = `${BASE_URL}/customers/${customerId}/orders`;
        const response = await fetch(url, this.getFetchOptions("GET"));
        return await response.json();
    }

    async getOrderItems(orderId) {
        const url = `${BASE_URL}/orders/${orderId}/order-items`;
        const response = await fetch(url, this.getFetchOptions("GET"));
        return await response.json();
    }

    async placeOrder(orderData) {
        const { customer } = orderData;
        const url = `${BASE_URL}/orders`;

        const response = await fetch(
            url,
            this.getFetchOptions("POST", {
                customer_id: customer.data.id,
                address_id: orderData.address_id,
                coupon_id: null,
                order_date: formatDate(new Date()),
                status: "not_completed",
                amount_products: 0,
                total_price: 0.0,
                payment_method: "unknown",
                shipping_method: "unknown",
                tracking_number: null,
            })
        );

        if (response.status === 201) {
            const order = await response.json();
            this.placeOrderItem(orderData, order.id);
        }
    }

    async placeOrderItem(orderData, orderId) {
        const { product, size, quantity } = orderData;
        const url = `${BASE_URL}/order-items`;

        const stockData = await this.getProductStock(product.id);
        const sizeStock = stockData.find((stock) => stock.size_id === size.id);

        if (!sizeStock || sizeStock.quantity_in_stock < quantity) {
            return "The requested quantity is not available";
        }

        const response = await fetch(
            url,
            this.getFetchOptions("POST", {
                order_id: orderId,
                product_id: product.id,
                product_size_id: size.id,
                product_details: JSON.stringify(product),
                quantity: quantity,
            })
        );

        if (response.status === 201) {
            const orderItem = await response.json();
            const updatedData = {
                amount_products: orderItem.quantity,
                total_price: product.price * orderItem.quantity,
            };
            this.fetchAndUpdateOrder(orderId, updatedData);
        }
    }

    async deleteOrderItem(product, orderId) {
        const url = `${BASE_URL}/order-items/${product.orderItemId}`;
        await fetch(url, this.getFetchOptions("DELETE"));

        const updatedData = {
            amount_products: -product.quantity,
            total_price: -product.price * product.quantity,
        };
        this.fetchAndUpdateOrder(orderId, updatedData);
    }

    async getProductStock(productId) {
        const url = `${BASE_URL}/product-stock/${productId}`;
        const response = await fetch(url, this.getFetchOptions("GET"));
        const data = await response.json();

        return data;
    }
}
