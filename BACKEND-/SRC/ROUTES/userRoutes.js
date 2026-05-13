import { Router } from "express";
import { recipeController } from "../CONTROLLERS/recipeController.js";
// import { isAuthenticated } from ""../MIDDLEWARE/authMiddleware.js";

const router = Router();


// Permet de voir toutes les users
router.get('/', userController.getAllUser);

//Permet de voir une user par id
router.get('/:id', userController.getAllById);

//Permet d'ajouter une user
router.post('/', userController.updateUser);

//Permet de modifier une user
router.put('/:id', userController.updateById);

//Permet de supprimer une user
router.delete('/:id', userController.deleteUser);

export default router;
