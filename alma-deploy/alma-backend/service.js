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

async function addUser(name, surname, email, password, created_time) {
    const client = await pool.connect();

    try {
        await client.query(
            `INSERT INTO users (name, surname, email, password, created_time) VALUES ($1, $2, $3, $4, $5)`,
            [name, surname, email, password, created_time]
        );
        console.log("User added successfully");
        return { name, surname, email, password, created_time };
    } catch (error) {
        console.error("Error adding user:", error.message);
        throw error;
    } finally {
        client.release();
    }
}


async function addTestResult(email, testId, score, created_time) {
    const client = await pool.connect();

    try {
        await client.query(
            `INSERT INTO test_results (user_email, test_id, score, created_time) VALUES ($1, $2, $3, $4)`,
            [email, testId, score, created_time]
        );
        console.log("Test result added successfully");
    } catch (error) {
        console.error("Error adding test result:", error.message);
    } finally {
        client.release();
    }
}

async function getAllUsers() {
    const client = await pool.connect();

    try {
        const usersResult = await client.query('SELECT * FROM users');
        const users = usersResult.rows;

        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            const testResultsResult = await client.query('SELECT * FROM test_results WHERE user_email = $1', [user.email]);
            user.testResults = testResultsResult.rows;
        }

        return users;
    } catch (error) {
        console.error("Error retrieving users:", error.message);
        return [];
    } finally {
        client.release();
    }
}

async function getUserByEmail(email) {
    const client = await pool.connect();

    try {
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            throw new Error('User not found');
        }

        const testResultsResult = await client.query('SELECT * FROM test_results WHERE user_email = $1', [email]);
        user.testResults = testResultsResult.rows;

        return user;
    } catch (error) {
        console.error("Error retrieving user by email:", error.message);
        return null;
    } finally {
        client.release();
    }
}
async function getUserByEmailAndPassword(email, password) {
    const client = await pool.connect();

    try {
        const result = await client.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];

        if (!user) {
            throw new Error('User not found');
        }

        if (user.password !== password) {
            throw new Error('Invalid password');
        }

        const testResultsResult = await client.query('SELECT * FROM test_results WHERE user_email = $1', [email]);
        user.testResults = testResultsResult.rows;

        return user;
    } catch (error) {
        console.error("Error retrieving user by email and password:", error.message);
        return null;
    } finally {
        client.release();
    }
}


export default { addUser, addTestResult, getAllUsers, getUserByEmail, getUserByEmailAndPassword };
