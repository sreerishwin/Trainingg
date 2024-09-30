// server.js
const express = require('express');
const models = require('./models');

const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
    models.User.findAll().then((result) => {
        res.status(200).json(result);
    })
});

app.post('/api/users', (req, res) => {
    const { id, username, email, password, phone, status } = req.body;

    models.User.create(req.body).then(user => res.json(user)).catch(err => console.log(err));
});

app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password, phone, status } = req.body;
    models.User.update(req.body,{
        where: {
            id:id
        }
    }).then(user => res.json(user)).catch(err => console.log(err));


    // db.query(`update users SET username = '${username}', email = '${email}', password = '${password}', phone = '${phone}', status = '${status}' WHERE id = '${id}' `,
    //     (err, result) => {
    //         if (err) return res.status(500).send(err);
    //         if (result.affectedRows === 0) return res.status(404).send('User not found');
    //         res.json({ message: 'User updated successfully' });
    //     }
    // );
});
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { username, email, password, phone, status } = req.body;
    models.User.destroy({
        where: {
            id:id
        }
    }).then(user => res.json({msg:"Deleted successfully"})).catch(err => console.log(err));
});


// app.delete('/api/users/:id', (req, res) => {
//     const { id } = req.params;
//     db.query(`DELETE FROM users WHERE id = '${id}'`, (err, result) => {
//         if (err) return res.status(500).send(err);
//         if (result.affectedRows === 0) return res.status(404).send('User not found');
//         res.json({ message: 'User deleted successfully' });
//     });
// });

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
