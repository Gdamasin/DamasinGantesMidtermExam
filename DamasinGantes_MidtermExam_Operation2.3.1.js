const pool = require("./db");

pool.query(`SELECT actor_id, 
                first_name, 
                last_name FROM actor 
                WHERE last_name = 'Guiness' 
                EXCEPT 
                SELECT actor_id, 
                first_name, 
                last_name 
                FROM actor 
                Where first_name = 'Ed'`, (err, res) => {
    try {
        console.log(res.rows);
    } catch (error) {
        console.log(err.message);
    }
});

pool.end();