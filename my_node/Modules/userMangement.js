const express = require('express')
const axios = require('axios');

const useRouteUser= express.Router()

//It is a part of a backend server that helps to manage and
// direct HTTP requests to different parts of the server based on the requested URL.

//here it will accept from the mail app.js and use this. more like u can say it as partial 
//implementation of static server response as we are not using any backend here.

useRouteUser.post('/users',(req,res)=>{
    const { username } = req.body;
    console.log("username=>",username)
    axios.post('http://localhost:8000/myapp/users', {
        data: { username: username }
      })
      .then(response => {
        res.json({ success: true });
      })
      .catch(error => {
        console.log(" error.message=>", error);
        res.json({ error: error.message });
      });

})

module.exports = useRouteUser;

