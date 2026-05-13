import { Router } from "express";
import { recipeController } from "../CONTROLLERS/recipeController.js";
// import { isAuthenticated } from ""../MIDDLEWARE/authMiddleware.js";

const router = Router();


// Permet de voir toutes les recettes
router.get('/', recipeController.getAllRecipes);

//Permet de voir une recette par id
router.get('/:id', recipeController.getAllById);

//Permet d'ajouter une recette
router.post('/', recipeController.updateRecipe);

//Permet de modifier une recette
router.put('/:id', recipeController.updateById);

//Permet de supprimer une recette
router.delete('/:id', recipeController.deleteRecipe);

export default router;
