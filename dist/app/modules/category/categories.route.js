"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = require("../../../enums/user");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const categories_controller_1 = require("./categories.controller");
const router = express_1.default.Router();
router.post('/create-category', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), categories_controller_1.CategoriesController.createCategory);
router.get('/:id', categories_controller_1.CategoriesController.getCategory);
router.patch('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), categories_controller_1.CategoriesController.updateCategory);
router.delete('/:id', (0, auth_1.default)(user_1.ENUM_USER_ROLE.ADMIN), categories_controller_1.CategoriesController.deleteCategory);
router.get('/', categories_controller_1.CategoriesController.getCategories);
exports.CategoriesRoutes = router;
