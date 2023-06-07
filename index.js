const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

const { Pool } = require('pg');
const { error } = require('console');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'clinic',
    user: 'postgres',
    password: '1234',
});

pool.connect()
    .then(() => console.log("connected"))
    .catch(err => console.error("couldn't connect", err.stack))


// Example API endpoint
// Create a user
app.post('/users', async (req, res) => {
    try {
        const { name, age, gender, year, dept, email, password } = req.body;
        const query = 'INSERT INTO student ( name, age, gender, year, dept, email, password) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *';
        const values = [ name, age, gender, year, dept, email, password];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get a user by Matric no
app.get('/users/:matric_no', async (req, res) => {
    try {
        const { matric_no } = req.params;
        const query = 'SELECT * FROM student WHERE matric_no = $1';
        const values = [matric_no];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            console.log(error)
            res.status(404).json({ error: 'User not found' });
        } else {
            console.log('success')
            res.json({success: true, matric_no});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.post('/users/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const query = 'SELECT * FROM student WHERE email = $1 AND password = $2';
        const values = [email, password];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Create a complaint for a user
app.post('/complaints', async (req, res) => {
    try {
        const { symptoms, duration, taken_drugs } = req.body;
        const query = 'INSERT INTO complaints ( symptoms, duration, taken_drugs) VALUES ($1, $2, $3) RETURNING *';
        const values = [ symptoms, duration, taken_drugs];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

app.get('/complaints/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = 'SELECT * FROM complaints WHERE id = $1';
        const values = [id];

        const result = await pool.query(query, values);

        if (result.rows.length === 0) {
            console.log(error)
            res.status(404).json({ error: 'COmplaint not found' });
        } else {
            console.log('success')
            res.json({success: true, id});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Update a complaint by ID
app.put('/complaints/:id', async (req, res) => {
    try {
        const id =parseInt(req.params.id)
        const { symptoms, duration, taken_drugs } = req.body;
        const query = 'UPDATE complaints SET symptoms = $1, duration = $2, taken_drugs = $3 WHERE id = $4';
        const values = [ symptoms, duration, taken_drugs, id];

        const result = await pool.query(query, values);
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});



// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
