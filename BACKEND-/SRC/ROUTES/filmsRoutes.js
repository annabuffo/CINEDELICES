import { Router } from "express";
import { recipeController } from "../CONTROLLERS/recipeController.js";
// import { isAuthenticated } from ""../MIDDLEWARE/authMiddleware.js";

const router = Router();


// Permet de voir toutes les films
router.get('/', filmController.getAllFilm);

//Permet de voir une film par id
router.get('/:id', filmController.getAllById);

//Permet d'ajouter une film
router.post('/', filmController.updateFilm);

//Permet de modifier une film
router.put('/:id', filmController.updateById);

//Permet de supprimer une film
router.delete('/:id', filmController.deleteFilm);

export default router;
