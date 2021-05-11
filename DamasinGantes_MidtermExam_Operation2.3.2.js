const pool = require('./db');

pool.query(`SELECT film_id, title, rating
FROM film
WHERE rating = 'R'
EXCEPT
SELECT film_id, title, rating
FROM film
WHERE film_id < 50`,
(err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();