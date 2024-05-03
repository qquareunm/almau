import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({
    user: 'almadb_user',
    host: 'dpg-colkd521hbls7390eh8g-a.frankfurt-postgres.render.com',
    database: 'almadb',
    password: 'qdjbOQ9NJtmQoD2bLswDAL6TCqaBuYkS',
    port: 5432,
    ssl: true
});

async function createUsersTable() {
    const client = await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(50) NOT NULL,
                surname VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_time VARCHAR(255) NOT NULL
            )
        `);
        console.log("Users table created successfully");
    } catch (error) {
        console.error("Error creating users table:", error.message);
    } finally {
        client.release();
    }
}

async function createTestResultsTable() {
    const client = await pool.connect();

    try {
        await client.query(`
            CREATE TABLE IF NOT EXISTS test_results (
                id SERIAL PRIMARY KEY,
                user_email VARCHAR(255) REFERENCES users(email),
                test_id VARCHAR(255) NOT NULL,
                score INT NOT NULL,
                created_time VARCHAR(255) NOT NULL
            )
        `);
        console.log("Test results table created successfully");
    } catch (error) {
        console.error("Error creating test results table:", error.message);
    } finally {
        client.release();
    }
}

createUsersTable();
createTestResultsTable();
