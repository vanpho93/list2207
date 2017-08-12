const express = require('express');

const app = express();

app.get('/', (req, res) => res.send({ message: 'OK' }));

// localhost:3000/cong/3/4
app.get('/cong/:soA/:soB', (req, res) => {
    const { soA, soB } = req.params;
    res.send({ ketqua: +soA + +soB })
});

// localhost:3000/sanpham/2

app.listen(3000, () => console.log('Server is running'));
