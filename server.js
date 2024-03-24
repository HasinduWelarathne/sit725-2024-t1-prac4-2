var express = require("express")
var app = express()

app.use(express.static(_dirname+'/public'))
app.use(express.json()); app.use(express.urlencoded({extended:False}));

var port = process.env.port || 3000;

app.listen(port,()=>{
console.log("App listening to: "+port)
})