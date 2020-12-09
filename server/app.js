const express = require('express');
const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
const router = express.Router();
const mysql = require('mysql')
const PORT = process.env.port || 3000
const books = require('./route/books')
const tags = require('./route/tags')
const authers = require('./route/authers')
const tabelSelector = require('./route/selectAllTable')
const search = require('./route/search')
const config = require('./config')




const app = express();  
const cors = require('cors')

app.use(express.static('upload'))
app.use(bodyParser.urlencoded({
    extended: true
}))

app.use(bodyParser())
app.use(cors())

// Route 
app.use('/books',books)
app.use('/tags',tags)
app.use('/authers',authers)
app.use('/tableSelector',tabelSelector)
app.use('/search' , search)

app.get('/ga' ,(req, res) => {
    const connection = mysql.createConnection(config)
    var querey = ` call getTable(); `;
    connection.query(querey, (error, result) => {
        if (error) {
            console.log(error);
            throw (error)
        }
        console.log(result)
         connection.end();

        return res.json(result)
    });
})

app.listen(PORT, () => {
    console.log("server on PORT ",PORT);

})

