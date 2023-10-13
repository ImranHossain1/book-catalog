"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ReviewAndRating_route_1 = require("../modules/ReviewAndRating/ReviewAndRating.route");
const auth_route_1 = require("../modules/auth/auth.route");
const book_route_1 = require("../modules/book/book.route");
const categories_route_1 = require("../modules/category/categories.route");
const orders_route_1 = require("../modules/orders/orders.route");
const profile_route_1 = require("../modules/profile/profile.route");
const user_route_1 = require("../modules/user/user.route");
const router = express_1.default.Router();
const moduleRoutes = [
    { path: '/auth', route: auth_route_1.AuthRoutes },
    { path: '/users', route: user_route_1.UserRoutes },
    { path: '/categories', route: categories_route_1.CategoriesRoutes },
    { path: '/books', route: book_route_1.BooksRoutes },
    { path: '/reviews', route: ReviewAndRating_route_1.ReviewsRoutes },
    { path: '/orders', route: orders_route_1.OrderRoutes },
    { path: '/profile', route: profile_route_1.UserProfileRoutes },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
