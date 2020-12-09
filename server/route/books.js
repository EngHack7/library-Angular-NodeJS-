const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')
const multer = require('multer');
const fs = require('fs-js')
const _moment = require('moment');
const app = express();

app.use(bodyParser.json());
const config = require('../config')
let connection = mysql.createConnection(config);

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'upload')
    },
    filename: (req, file, callBack) => {
        callBack(null, `img_${file.originalname}`)
    }
})

const upload = multer({
    storage: storage
});

router.post('/file', upload.single('file'), (req, res, next) => {
    const file = req.file;
    console.log(file);
    if (!file) {
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    res.send(file);
})

router.post('/addBookWithTagAndAuther', upload.single('img'), (req, res, next) => {
    let _date = _moment().format('YYYY-MM-DD hh:mm:ss')
    const {
        title,
        description,
        tags,
        auther_id
    } = req.query;
    const file = req.file
    console.log(req.body);
    
    connection.query(`select id from Books where title = '${title}' and description = '${description}'`, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        if (!result) {
            res.json({
                error: "the book already exist"
            })
        }
    })
    tagsN = JSON.stringify(tags);
    tagsN = tagsN.split('[').join('')
    tagsN = tagsN.split(']').join('')
    tagsN = tagsN.split('"').join('')
    tagsN=tagsN.split(',')

    const addQ = `INSERT INTO manager.Books SET title = '${title}' , description ='${description}' , auther_Id = ${auther_id} , image_URL = '${file.filename}', date_Inserte ='${_date}' `;
    //    const addQ  = `CALL saveBookWithAllElement('${title}','${description}','${auther_Id}','${imageURL}')`
    connection.query(addQ, (error1, insertBookResult) => {
        if (error1) {
            console.log(error1)
            throw (error1)
        } else {
            const selectBookId = insertBookResult.insertId
            console.log(insertBookResult);
            if (tagsN.length > 0) {
                for (let index = 0; index < tagsN.length; index++) {
                    var insertBookTags = `insert into manager.book_tag set book_id = ${selectBookId},tag_id = ${tagsN[index]}`;
                    //    var insertBookTags = `AddBookIDTagId(${selectBookId},${tags[index]})`;
                    connection.query(insertBookTags, (error3, result3) => {
                        if (error3) {
                            console.log(error3)
                            throw (error3)
                        }
                    })
                }
            }
            res.json({
                success: "added"
            })
        }
    })
});

router.post('/update', upload.single('imgFile'), (req, res) => {
    let file = req.file
    console.log(req.query);
    if (!file) {
        console.log("no file");
        const error = new Error('No File')
        error.httpStatusCode = 400
        return next(error)
    }
    const sql = `update manager.Books set title = '${req.query.title}' ,  description = '${req.query.description}' , auther_Id = '${req.query.AutherId}' , image_URL = '${req.file.path}'
     where id = ${req.query.id} `;
    connection.query(sql, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        return res.json(result)
    })
})

router.post('/add', upload.single('imgFile'), (req, res) => {
    let _date = _moment().format('YYYY-MM-DD hh:mm:ss')
console.log(_date);

    const file = req.file.path
    console.log(file);
    const {
        title,
        description
    } = req.body;
    const addQ = `INSERT INTO manager.Books SET title = '${title}' , description ='${description}' , img_URL = '${file}' , date_Inserte = '${_date}'`;
    connection.query(addQ, (error, result) => {
        if (error) {
            console.log(error);
            throw (error);
        }
        return res.json({
            title,
            description
        });
    })
});

router.get('/delete', (req, res) => {
    const {
        id,
        image
    } = req.query;
    const path = `./upload/${image}`
    fs.unlink(path,(error) =>{
        if(error)  { throw(error)} else {console.log('deleted')}
        
    })
    const deleteQ = `delete from manager.Books where  id = ?`;
    const Deleted = connection.query(deleteQ, id, (error) => {
        if (error) {
            console.log(error);
            throw (error);
        } else {
            var deleteQ2 = `delete from manager.book_tag where  book_id = ?`;
            const Deleted2 = connection.query(deleteQ2, id, (error) => {
                if (error) {
                    console.log(error);
                    throw (error);
                }
                return res.json({
                    deleted: "deleted"
                })
            })
        }
    })
})

router.get('/sort' , (req, res) => {
    connection.query(`SELECT image_URL,date_Inserte,title,auther_Name FROM 
    manager.Books 
    left join
    Auther on auther_Id = Auther.id
    order by date_Inserte desc;`, (error, data) => {
        if (error) {
            console.log(error);
            throw(error);
        }
        res.json(data);
    })
})

module.exports = router