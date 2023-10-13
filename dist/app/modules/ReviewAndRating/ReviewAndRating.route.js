"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ReviewAndRating_controller_1 = require("./ReviewAndRating.controller");
const router = express_1.default.Router();
router.post('/create-review', ReviewAndRating_controller_1.ReviewsController.createReviw);
router.get('/:id', ReviewAndRating_controller_1.ReviewsController.getReview);
router.patch('/:id', ReviewAndRating_controller_1.ReviewsController.updateReview);
router.delete('/:id', ReviewAndRating_controller_1.ReviewsController.deleteReview);
router.get('/', ReviewAndRating_controller_1.ReviewsController.getReviews);
exports.ReviewsRoutes = router;
