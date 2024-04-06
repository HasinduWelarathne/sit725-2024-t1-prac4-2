require('dotenv').config()
var express = require("express")
var app = express()
var cors = require("cors")
const MongoClient = require('mongodb').MongoClient;
let projectCollection;

// Database Connection

const uri = "mongodb+srv://Hasindu:Hasindu123@cluster0.eoazvpp.mongodb.net/Test?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri,{ useNewUrlParser: true })


app.use(express.static(__dirname+'/public'))
app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cors())

const createColllection = (collectionName) => {
    client.connect((err,db) => {
        projectCollection = db.db().collection(collectionName);
        if(!err) {
            console.log('MongoDB Connected')
        }
        else {
            console.log("DB Error: ", err);
            process.exit(1);
        }
    })
}


const insertProjects = (project, callback) => {
    projectCollection.insertOne(project, (err, result) => {
        if (err) {
            console.log("Error inserting project:", err);
            callback(err, null);
        } else {
            console.log("Project successfully inserted:", result);
            callback(null, result);
        }
    });
};
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
}

app.get('/api/projects',(req,res) => {
    getProjects((err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
})

app.post('/api/projects',(req,res) => {
    console.log("New Cat added", req.body)
    var newProject = req.body;
    insertProjects(newProject,(err,result) => {
        if(err) {
            res.json({statusCode: 400, message: err})
        }
        else {
            res.json({statusCode: 200, message:"New Cat Successfully added", data: result})
        }
    })
})


var port = process.env.port || 5500;

app.listen(port,()=>{
    console.log("App running at http://localhost:"+port)
    createColllection("Cat")
})