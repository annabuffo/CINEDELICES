import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const __filename = fileUrlToPath(import.meta.url);
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
        CREATE TABLE IF NOT EXISTS auth ( 
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        date_creation TEXT DEFAULT CURRENT_TIMESTAMP
        );
    `);
    return db;
}