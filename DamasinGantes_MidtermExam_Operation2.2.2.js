const pool = require("./db")

pool.query(`SELECT c.name AS "Category name", 
            COUNT(f.category_id) AS "Film Count" 
            FROM category AS "c" 
            JOIN film_category AS "f" 
            ON f.category_id = c.category_id 
            GROUP BY c.category_id, c.name;`, (err, res) => {
    try {
        console.log(res.rows);
    } catch(error) {
        console.log(err.message);
    }
});
pool.end();