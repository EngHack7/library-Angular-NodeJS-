const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const config = require('../config')

let connection = mysql.createConnection(config);


router.post('/add', (req, res) => {
    const {
        tag_Name
    } = req.body;

    console.log(tag_Name);

    sql = 'CALL AddTag(?)';
    connection.query(sql, tag_Name, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        res.json({
            succes: `added : ${tag_Name}`
        });
    });
});

router.post('/update', (req, res, next) => {
    const {
        tag_Name,
        id
    } = req.body;

    console.log(req.body.id);

    const sql = `CALL TagUpdate(${tag_Name},${id})`;

    connection.query(sql, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        return res.json({success:'updated'})
    })
});


router.get('/delete', (req, res) => {
    const {
        id
    } = req.query;

    connection.query(`CALL DeleteTag(${id})` ,(error, result) => {
        if (error) {
            console.log(error)
            throw (error)
        } else {
            return res.json(result)
        }
    })
})




module.exports =  router