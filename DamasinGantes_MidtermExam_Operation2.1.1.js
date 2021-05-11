const pool = require("./db");

pool.query('SELECT count(title)FROM public.film;', (err, res)=> 
{
    try {
        console.log(res.rows);
    } catch(error) {
        console.log(err.message);
    }
});

pool.end();