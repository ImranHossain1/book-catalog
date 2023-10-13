"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const orders_service_1 = require("./orders.service");
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const token = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization;
        const data = req.body;
        const result = yield orders_service_1.OrderService.createOrder(data, token);
        res.status(200).json({
            status: 'success',
            message: 'Order created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const token = (_b = req.headers) === null || _b === void 0 ? void 0 : _b.authorization;
        const result = yield orders_service_1.OrderService.getOrders(token);
        res.status(200).json({
            status: 'success',
            message: 'Orders Retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    try {
        const id = (_c = req.params) === null || _c === void 0 ? void 0 : _c.orderId;
        const token = (_d = req.headers) === null || _d === void 0 ? void 0 : _d.authorization;
        const result = yield orders_service_1.OrderService.getOrder(id, token);
        res.status(200).json({
            status: 'success',
            message: 'Order fetched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.OrderController = {
    createOrder,
    getOrders,
    getOrder,
};
