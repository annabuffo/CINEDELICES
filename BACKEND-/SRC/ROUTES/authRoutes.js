import { Router } from "express";
import { recipeController } from "../CONTROLLERS/recipeController.js";
// import { isAuthenticated } from ""../MIDDLEWARE/authMiddleware.js";

const router = Router();


// Permet de voir toutes les Auths
router.get('/', AuthController.getAllAuth);

//Permet de voir une Auth par id
router.get('/:id', AuthController.getAllById);

//Permet d'ajouter une Auth
router.post('/', AuthController.updateAuth);

//Permet de modifier une Auth
router.put('/:id', AuthController.updateById);

//Permet de supprimer une Auth
router.delete('/:id', AuthController.deleteAuth);

export default router;
