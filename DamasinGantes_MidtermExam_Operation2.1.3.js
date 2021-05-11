const pool = require("./db");

pool.query(`SELECT film_id, 
            title FROM public.film 
            WHERE 
            replacement_cost =(SELECT MAX(replacement_cost) 
            FROM public.film) ORDER BY title`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();