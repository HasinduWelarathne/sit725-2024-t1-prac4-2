var express = require("express")
var app = express()
const url="mongodb+srv://Hasindu:Hasindu123@cluster0.eoazvpp.mongodb.net/";
app.use(express.static(_dirname+'/public'))
app.use(express.json()); app.use(express.urlencoded({extended:False}));

const getcards = () => {
    $.get('/api/cards',(response) => {
    if(response.statusCode==200){
    addCards(response.data);
    }
    })
    }
    

var port = process.env.port || 3000;

app.listen(port,()=>{
console.log("App listening to: "+port)
})