import {combineReducers} from "redux";
import categories from "./categories";
import branches from "./branches";
import offers from './offers';
import slides from './slides';
import products from './products';
import single from './single';
import register from './register';
import login from "./login";
import basket from './basket';
import user from './user';
import modify from './modify';
import forget from './forget';
import order from './order';
import paymentTypes from './paymentTypes';


export default combineReducers({
    categories,
    branches,
    offers,
    slides,
    products,
    single,
    basket,
    register,
    login,
    user,
    modify,
    forget,
    order,
    paymentTypes,
});
