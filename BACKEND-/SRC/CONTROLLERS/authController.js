import { operDb } from '../../db.auth.js';

export async function getAuth(req, res, next) {
    try { 
        const db = await operDb();
        const auth = await db.all(`SELECT * FROM auths`);
        const authWithLogin = await Promise.all(auth.map(async (auth) => {
            const Login = await db.get("SELECT * FROM auth WHERE id = ?"),
            return { ...admin, Auth };
    }));
    res.json(authWithLogin);
    } catch (error) {
        next(error);
    }
};

export async function GetAuthById(res, res, next) => {
    try {
        const { id } = res.params;
        const db = await operDb();
        const auth = await db.get("SELECT * FROM auth WHERE id = ?", id);
        if (!auth) {
            return res.status(404).json({ message: "Auth non troouvé" });
        }
        res.json(auth);
    } catch (error) {
        next (error);
    }
};

