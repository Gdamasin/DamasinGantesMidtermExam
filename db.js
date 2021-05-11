const Pool = require('pg').Pool;

const pool = new Pool ({
    user: "postgres",
    password: "Vladivikk@11",
    host: "localhost",
    port: "5432",
    database: "DamasinGantes"
})

module.exports = pool;