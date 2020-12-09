const express = require('express')
const router = express.Router()
const mysql = require('mysql')
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1431998.0Aa',
    database: 'manager'
});

db.connect((err) => {
    if (err) {console.log(error)
     throw (err)}
});

router.get('/', (req, res) => { // 'authers','/tags'
const {table_Name} = req.query

    const selectQ = `SELECT * FROM  ${table_Name}`;
   db.query(selectQ, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        return res.json(result);
    })
});

module.exports = router;