const express = require('express');
const queryDB = require('./db');

const app = express();
app.use(express.static('./images'));
app.get('/', (req, res) => res.send({ message: 'OK' }));

// localhost:3000/cong/3/4
app.get('/cong/:soA/:soB', (req, res) => {
    const { soA, soB } = req.params;
    res.send({ ketqua: +soA + +soB })
});

app.get('/sanpham/:id', (req, res) => {
    const { id } = req.params;
    queryDB('SELECT * FROM "Product" WHERE id = $1', [id])
    .then(result => res.send(result.rows[0]));
});

app.get('/sanpham', (req, res) => {
    queryDB('SELECT * FROM "Product"', [])
    .then(result => res.send(result.rows));
});

app.get('/singer/:maxCurrentId', (req, res) => {
    const { maxCurrentId } = req.params;
    const selectSql = 'SELECT * FROM "Singer" WHERE id > $1 ORDER BY id ASC LIMIT 3';
    queryDB(selectSql, [maxCurrentId])
    .then(result => res.send(result.rows))
    .catch(err => res.send({ errMessage: err.message }));
});

// localhost:3000/sanpham/2

app.listen(3000, () => console.log('Server is running'));
