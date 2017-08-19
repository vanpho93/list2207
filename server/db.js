const pg = require('pg');

const pool = new pg.Pool({
    host: 'ec2-50-17-217-166.compute-1.amazonaws.com',
    port: 5432,
    database: 'da1c5kl5d7rfuj',
    user: 'nnjzeanapajioq',
    password: 'c07d0d5dac709f456d97e2fa0ae2d4fea40a02686eb6f77a33024867f56a710d',
    max: 20,
    idleTimeoutMillis: 1000,
    ssl: true
});

function queryDB(sql, arrayData) {
    return new Promise((resolve, reject) => {
        pool.connect((err, client, done) => {
            if (err) return reject(err);
            client.query(sql, arrayData, (errQuery, result) => {
                done(errQuery);
                if (errQuery) return reject(errQuery);
                resolve(result);
            });
        });
    });
}

module.exports = queryDB;
