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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesController = void 0;
const categories_service_1 = require("./categories.service");
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = __rest(req.body, []);
        const result = yield categories_service_1.CategoriesService.createCategory(data);
        res.status(200).json({
            status: 'success',
            message: 'Category created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getCategories = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield categories_service_1.CategoriesService.getCategories();
        res.status(200).json({
            status: 'success',
            message: 'Categories Retreive successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield categories_service_1.CategoriesService.getCategory(id);
        res.status(200).json({
            status: 'success',
            message: 'Category fetched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = __rest(req.body, []);
        const result = yield categories_service_1.CategoriesService.updateCategory(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Category updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield categories_service_1.CategoriesService.deleteCategory(id);
        res.status(200).json({
            status: 'success',
            message: 'Category deleted successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.CategoriesController = {
    createCategory,
    getCategories,
    getCategory,
    updateCategory,
    deleteCategory,
};
