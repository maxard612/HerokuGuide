var path = require ("path")
var express = require('express');
var PORT = process.env.PORT || 3000;
var App = express();

App.get("/", function(req, res){
   res.json(path.join(__dirname, "public/index.html"))
})
App.listen(PORT,function(){
    console.log ("app listen at port : " + PORT)
})