// server.js
const express = require('express');
const db = require('./db');

const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
    db.query('select * from users', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/api/users', (req, res) => {
    const { id, username, email, password, phone, status } = req.body;

    db.query(`insert into users (id, username, email, password, phone, status) values ('${id}', '${username}','${email}','${password}','${phone}','${status}')`,
        (err, result) => {
            if (err) return res.status(500).send(err);
            res.status(201).json({ id: result.insertId, username, email, phone, status });
        }
    );
});

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password, phone, status } = req.body;
    db.query(`update users set username = '${username}', email = '${email}', password = '${password}', phone = '${phone}', status = '${status}' where id = '${id}' `,
        (err, result) => {
            if (err) return res.status(500).send(err);
            if (result.affectedRows === 0) return res.status(404).send('User not found');
            res.json({ message: 'User updated successfully' });
        }
    );
});

app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db.query(`delete from users where id = '${id}'`, (err, result) => {
        if (err) return res.status(500).send(err);
        if (result.affectedRows === 0) return res.status(404).send('User not found');
        res.json({ message: 'User deleted successfully' });
    });
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
