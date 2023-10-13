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
exports.BooksController = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = __rest(req.body, []);
        const result = yield book_service_1.BooksService.createBook(data);
        res.status(200).json({
            status: 'success',
            message: 'Book created successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = req.query;
        // console.log(options)
        const result = yield book_service_1.BooksService.getBooks(options);
        res.status(200).json({
            status: 'success',
            message: 'Books Retrive successfully',
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
});
const getBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield book_service_1.BooksService.getBook(id);
        res.status(200).json({
            status: 'success',
            message: 'Book getched successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = __rest(req.body, []);
        const result = yield book_service_1.BooksService.updateBook(id, data);
        res.status(200).json({
            status: 'success',
            message: 'Book updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield book_service_1.BooksService.deleteBook(id);
        res.status(200).json({
            status: 'success',
            message: 'Book deleted successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const getBooksByCategoryId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const options = req.query;
        const result = yield book_service_1.BooksService.getBooksByCategoryId(req.params.categoryId, options);
        res.status(200).json({
            status: 'success',
            message: 'Books with associated category data fetched successfully',
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.BooksController = {
    createBook,
    getBooks,
    updateBook,
    getBook,
    deleteBook,
    getBooksByCategoryId,
};
