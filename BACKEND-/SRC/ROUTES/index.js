import { Router } from "express";
import authRoutes from '../ROUTES/authRoutes.js';
import filmRoutes from '../ROUTES/filmsRoutes.js';
import recipeRoutes from '../ROUTES/recipesRoutes.js';
import userRoutes from '../ROUTES/userRoutes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('films', filmRoutes);
router.use('recipes', recipeRoutes);
router.use('users', userRoutes);

export default router;

