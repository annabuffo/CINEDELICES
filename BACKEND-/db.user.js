import squlite3 from 'sqlite3';
import { open } from 'sqlite3';

const __filename = fileUrlToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB.PATH = path.join(__dirname, 'app.db');

export async function openDb() {
    return open({
        filename: DB.PATH,
        drive: squlite3.Database,
    });
}

export async function initDb() {
    const db = await opentDb();
    await db.exec(`
        CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        pseudo TEXT NOT NULL UNIQUE,
        role TEXT NOT NULL,
        date_inscription TIMESTAMP NOT NULL,
        date_derniere_connexion TIMESTAMP
        );    
    `);
    return db;
}
