import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const __filename = fileUrlToPAth(import.meta.url):
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, "app.db");

export async function openDb() {
    return open({
        filename: DB_PATH,
        driver: sqlite3.Database,
    });
}

export async function initDb() {
    const db = await openDb();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS recipe (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        id_user INTEGER NOT NULL,
        id_categorie INTEGER NOT NULL,
        title VARCHAR(255) NOT NULL, 
        description VARCHAR(255) NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL,
        image TEXT,
        temps_préparation INTEGER NOT NULL ,
        temps_cuisson INTEGER NOT NULL,
        portions INTEGER NOT NULL,
        difficultes VARCHAR(50),
        publiee BOOLEAN DEFAULT FALSE,
        date_creation TIMESTAMP,
        date_modification TIMESTAMP,
        FOREIGN KEY (id_user) REFERENCES "user"(id) ON DELETE CASCADE,
        FOREIGN KEY (id_category) REFERENCES "category"(id) ON DELETE CASCADE
        );
    `);
    return db;
}
