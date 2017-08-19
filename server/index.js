const express = require('express');
const jsonParser = require('body-parser').json();

// const queryDB = require('./db');

const app = express();
app.use(express.static('./images'));
app.get('/', (req, res) => res.send({ message: 'OK' }));

// localhost:3000/cong/3/4
app.get('/cong/:soA/:soB', (req, res) => {
    const { soA, soB } = req.params;
    res.send({ ketqua: +soA + +soB });
});

// app.get('/sanpham/:id', (req, res) => {
//     const { id } = req.params;
//     queryDB('SELECT * FROM "Product" WHERE id = $1', [id])
//     .then(result => res.send(result.rows[0]));
// });

// app.get('/sanpham', (req, res) => {
//     queryDB('SELECT * FROM "Product"', [])
//     .then(result => res.send(result.rows));
// });

// app.get('/singer/:maxCurrentId', (req, res) => {
//     const { maxCurrentId } = req.params;
//     const selectSql = 'SELECT * FROM "Singer" WHERE id > $1 ORDER BY id ASC LIMIT 3';
//     queryDB(selectSql, [maxCurrentId])
//     .then(result => {
//         setTimeout(() => res.send(result.rows), 1000)
//     })
//     .catch(err => res.send({ errMessage: err.message }));
// });


// app.post('/singer', jsonParser, (req, res) => {
//     const { name, image } = req.body;
//     const insertSql = `INSERT INTO public."Singer"(name, image) VALUES ($1, $2);`
//     queryDB(insertSql, [name, image])
//     .then(() => res.send({ message: 'Them thanh cong' }))
//     .catch(err => res.send({ errMessage: err.message }));
// });
// localhost:3000/sanpham/2

app.listen(process.env.PORT || 3000, () => console.log('Server is running'));

// app.get('/singer')
// app.post('/singer')
// app.put('/singer')
// app.delete('/singer')