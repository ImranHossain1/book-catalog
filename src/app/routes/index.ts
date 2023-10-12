import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.route';
import { CategoriesRoutes } from '../modules/category/categories.route';
import { UserRoutes } from '../modules/user/user.route';

const router = express.Router();

const moduleRoutes = [
  { path: '/auth', route: AuthRoutes },
  { path: '/users', route: UserRoutes },
  { path: '/categories', route: CategoriesRoutes },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
