const express = require('express')
// import { data } from 'jquery';
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json());
const config = require('../config')
let connection = mysql.createConnection(config);


// function RemoveUndefined(arrOfBody) {
//     arrOfBody = JSON.stringify(arrOfBody);
// arrOfBody = arrOfBody.split(']').join('');
// arrOfBody = arrOfBody.split('[').join(''); 
// arrOfBody = arrOfBody.split('"').join('');
// arrOfBody = arrOfBody.split(',');
// arrOfBody = Filter(arrOfBody,'undefined')
// return arrOfBody
// }
// function Filter (arr, value) 
// { return arr.filter(function(ele){ return ele != value; });}


router.post('/filter',(req , res) => {
    const {
        title,
        AutherName,
        TagName
    } = req.body;
    if (AutherName === 'undefined' && TagName === 'undefined' && title == 'undefined') {
      return  res.json([{error : 'cant search'}])
    }
console.log(title,AutherName,TagName);

// var arrOfBody = [title,AutherName,TagName];
// arrOfBody = RemoveUndefined(arrOfBody);
// console.log(arrOfBody);

    resultForQuery=''

    var searchQuery = `SELECT 
    title,
    auther_Name,
    image_URL
FROM
    manager.Books
        left JOIN
    manager.Auther ON Books.auther_Id = Auther.id
        left JOIN
    manager.book_tag ON book_tag.book_id = Books.id
        left JOIN
    Tag ON book_tag.tag_id = Tag.id where 
    `;

    // for(var i=0 ; i <arrOfBody.length ; i++)
    // {
    //   if(arrOfBody[i] )
    //   {
    //     if (resultForQuery ==  '')
    //     {
    //         if (i == 0) {
    //             resultForQuery += `( Books.title like '${arrOfBody[i]}%'`;
    //         } else if(i == 1 ){
    //             resultForQuery += `( Auther.auther_Name =  '${arrOfBody[i]}'`;
    //         }else{resultForQuery += `( Tag.tag_Name = '${arrOfBody[i]}'`}
    //     }else{
    //       if (i == 0) {
    //             resultForQuery += `and Books.title =  '${arrOfBody[i]}'`;
    //         } else if(i == 1 ){
    //             resultForQuery += `and Auther.auther_Name =  '${arrOfBody[i]}'`;
    //         }else{resultForQuery += `and Tag.tag_Name = '${arrOfBody[i]}' ` ;}
    //     }
    //   }
    // } searchQuery += resultForQuery + ');'



    if (title != 'undefined') {
        searchQuery = searchQuery + `(Books.title like '${title}%'`
    }
    if (AutherName != 'undefined') {
        if (title ==  "undefined") {
            searchQuery = searchQuery + `(Auther.auther_Name = '${AutherName}'`
        }
        searchQuery = searchQuery + ` and Auther.auther_Name = '${AutherName}'`
    }
    if (TagName != 'undefined') {
        if (title == "undefined" && AutherName == "undefined") {
            searchQuery = searchQuery + `(Tag.tag_Name = '${TagName}'`
        }else{searchQuery = searchQuery + ` and Tag.tag_Name = '${TagName}'`}
    }
    console.log(searchQuery);
    
    searchQuery += ');'
    console.log(searchQuery)
    connection.query(searchQuery,(error,result) =>{
        if (error) {
            console.log(error);
            throw (error)
        }
        console.log(result);
        res.json(result)
    })
})

module.exports = router;