const express = require('express');
const router = express.Router();
const mysql = require('mysql')

const config = require('../config')

let connection = mysql.createConnection(config);

router.post('/update', (req, res, ) => {
    const {
        auther_Name,
        id

    } = req.body;

    console.log(req.body.id);

    const sql = `update manager.Auther set auther_Name = '${auther_Name}' where id = ${id}`

    connection.query(sql, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        return res.send('updated')
    })
});


router.get('/delete', (req, res) => {
    const {
        id
    } = req.query;

    console.log(id);

    const deleteQ = `delete from manager.Auther where  id = ?`;
    const Deleted = connection.query(deleteQ, id, (error) => {
        if (error) {
            console.log(error);
            throw (error);
        }
        return res.send("deleted")
    })
});

router.post('/add', (req, res) => {
    const {
        auther_Name
    } = req.body;

    sql = 'INSERT INTO manager.Auther SET auther_Name = ?';
    connection.query(sql, auther_Name, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        res.json({
            succes: `wellcom : ${auther_Name}`
        });
    });
});



module.exports =  router