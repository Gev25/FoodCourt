import axios from "axios";
import Storage from './helpers/storage';

const api = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        //Authorization: '563492ad6f917000010000017e448347ad8e4c17b592e6e191f8e5b5',
    }
});

api.interceptors.request.use((config) => {
    const c = config;
    const token = Storage.getToken();
    if (token) {
        c.headers.authorization = token;
    }
    return c;
}, Promise.reject);

export default class Api {
    static getAllCategories() {
        return api.get("/categories/get");
    }

    static getAllBranches() {
        return api.get("/map/get");
    }

    static getAllOffers() {
        return api.get("/offers/get")
    }

    static getSlides() {
        return api.get('/slides/get')
    }

    static getProductByCategory(slug) {
        return api.get(`/products/get/category/${slug}`)
    }

    static getSingleProduct(slug) {
        return api.get(`/products/get/${slug}`)
    }
    static regUser(params) {
        return api.post(`/users/register`, {...params})
    }
    static signIn(params){
        return api.post(`/users/login`, {...params})
    }
    static getBasket(){
        return api.get('/basket')
    }

    static addToBasket(productId, quantity){
        return api.post('/basket', {productId, quantity})
    }
    static removeFromBasket(id) {
        return api.delete(`/basket/${id}`);
    }


    static getUserProfile(){
        return api.get('/users/current')
    }
    static editUserCurrent(params){
        return api.put('/users/current', params)
    }
    static getKey(email) {
        return api.post(`/users/forget-pass`, {email});
    }

    static publicKey() {
        return api.get(`/payment/public-key`);
    }
    static getCurrentProfile() {
        return api.get(`/users/current`);
    }
    static changePass(params) {
        return api.post(`/users/change-pass`, params);
    }
    static addOrder(params) {
        return api.post(`/orders`, params);
    }
    static getActualOrders() {
        return api.get(`/orders/user/not-received`);
    }
    static getAllPaymentTypes() {
        return api.get(`/payment-types`);
    }
}


