const pool = require("./db")

pool.query(`SELECT * FROM midterm_total_films_per_category`, (err, res) => {
    try {
        console.log(res.rows);
    } catch(error) {
        console.log(err.message);
    }
});
pool.end();