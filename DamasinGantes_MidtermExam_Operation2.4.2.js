const pool = require("./db");

pool.query('SELECT public.number_of_categories()', (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();