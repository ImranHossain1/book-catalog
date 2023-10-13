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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const prisma_1 = require("../../../shared/prisma");
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.create({ data });
    return result;
});
const getBooks = (options) => __awaiter(void 0, void 0, void 0, function* () {
    const { sortBy, sortOrder, searchTerm, minPrice, maxPrice } = options, filterData = __rest(options, ["sortBy", "sortOrder", "searchTerm", "minPrice", "maxPrice"]);
    const page = parseInt(options === null || options === void 0 ? void 0 : options.page) || 1;
    const size = parseInt(options === null || options === void 0 ? void 0 : options.size) || 10;
    const skip = size * page - size || 0;
    const take = size || 10;
    const minPriceFloat = parseFloat(minPrice) || 0;
    const maxPriceFloat = parseFloat(maxPrice) || 0;
    const where = {
        AND: [],
    };
    if (searchTerm) {
        where.AND.push({
            OR: [
                { title: { contains: searchTerm, mode: 'insensitive' } },
                { author: { contains: searchTerm, mode: 'insensitive' } },
                { genre: { contains: searchTerm, mode: 'insensitive' } },
            ],
        });
    }
    if (filterData.category) {
        where.AND.push({
            category: {
                title: {
                    equals: filterData.category,
                    mode: 'insensitive',
                },
            },
        });
    }
    if (maxPrice) {
        where.AND.push({
            price: {
                lte: maxPriceFloat,
            },
        });
    }
    if (minPrice) {
        where.AND.push({
            price: {
                gte: minPriceFloat,
            },
        });
    }
    const result = yield prisma_1.prisma.book.findMany({
        include: {
            category: true,
        },
        skip,
        take,
        orderBy: {
            [sortBy]: sortOrder,
        },
        where,
    });
    const total = yield prisma_1.prisma.book.count({ skip, take, where });
    const totalPages = Math.ceil(total / size);
    return {
        meta: {
            page,
            size,
            total,
            totalPages,
        },
        data: result,
    };
});
const getBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.findUnique({
        where: { id },
        include: {
            category: true,
        },
    });
    return result;
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.book.delete({
        where: { id },
    });
    return result;
});
const getBooksByCategoryId = (categoryId, options) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(options === null || options === void 0 ? void 0 : options.page) || 1;
    const size = parseInt(options === null || options === void 0 ? void 0 : options.size) || 10;
    const skip = size * page - size || 0;
    const take = size || 10;
    const isExistCategory = yield prisma_1.prisma.category.findMany({});
    if (!isExistCategory) {
        throw new ApiError_1.default(http_status_1.default.BAD_REQUEST, 'Category Not Exist');
    }
    const result = yield prisma_1.prisma.book.findMany({
        where: {
            categoryId,
        },
        include: {
            category: true,
        },
    });
    const total = yield prisma_1.prisma.book.count({ skip, take });
    const totalPages = Math.ceil(total / size);
    return {
        meta: {
            page,
            size,
            total,
            totalPages,
        },
        data: result,
    };
});
exports.BooksService = {
    createBook,
    getBooks,
    getBook,
    updateBook,
    deleteBook,
    getBooksByCategoryId,
};
