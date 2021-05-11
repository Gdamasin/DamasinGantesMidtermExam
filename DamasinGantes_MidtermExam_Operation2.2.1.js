const pool = require("./db");

pool.query(`SELECT film_id, 
            title, c.name AS "category", 
            f.rental_rate AS "price", 
            f.rating FROM public.film f 
            LEFT OUTER JOIN category c ON c.name = c.name 
            GROUP BY title, film_id, c.name;`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();