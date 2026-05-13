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
        CREATE TABLE IF NOT EXISTS film(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(255) NOT NULL,
        annee INTEGER NOT NULL,
        genre TEXT NOT NULL,
        type BOOLEAN NOT NULL,
        affiche_url TEXT NOT NULL,
        tmdb_id INTEGER NOT NULL UNIQUE
        );    
    `);
    return db;
}
