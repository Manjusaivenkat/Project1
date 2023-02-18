const express = require('express')
/*
Express to handle incoming requests from your UI, process them, and 
send the appropriate responses back to the client.
*/
const bodyParser = require('body-parser');
/*
body-parser is a middleware used in Node.js to parse the request body of incoming HTTP requests. 
It allows you to access the data submitted in the request body as req.body in your code,
 making it easier to handle and manipulate the data.
*/
const useRouteUser = require('./Modules/userMangement')
const cors = require('cors');
/*
You are using CORS (Cross-Origin Resource Sharing)
 to allow web browsers to make requests to a server that is in a different domain or
 port than the one the browser is currently on. 
 By default, web browsers prohibit cross-origin HTTP requests,
 but you can use CORS to configure the server to allow such requests from specified origins.
*/
const app = express()
const PORT = process.env.PORT || 5001;

app.use(cors());

app.use(bodyParser.json())
app.use('/myui',useRouteUser);
console.log("check in app")
app.listen(
    PORT,()=>{
        console.log("server started at",PORT)
    }
)