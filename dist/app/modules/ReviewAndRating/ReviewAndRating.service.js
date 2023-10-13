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
exports.ReviewService = void 0;
const prisma_1 = require("../../../shared/prisma");
const createReview = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.reviewAndRating.create({ data });
    return result;
});
const getReviws = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.reviewAndRating.findMany({
        include: {
            user: true,
            book: true,
        },
    });
    return result;
});
const getReviw = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.reviewAndRating.findUnique({
        where: { id },
        include: {
            user: true,
            book: true,
        },
    });
    return result;
});
const updateReview = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.reviewAndRating.update({
        where: { id },
        data: payload,
    });
    return result;
});
const deleteReview = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.reviewAndRating.delete({
        where: { id },
    });
    return result;
});
exports.ReviewService = {
    createReview,
    getReviws,
    getReviw,
    updateReview,
    deleteReview,
};
