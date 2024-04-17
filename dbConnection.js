const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://Hasindu:Hasindu123@cluster0.eoazvpp.mongodb.net/Test?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true });

let projectCollection;

const connectDB = (callback) => {
    client.connect((err, db) => {
        projectCollection = db.db().collection("Cat");
        callback(err);
    });
};

const getCollection = () => {
    return projectCollection;
};

module.exports = {
    connectDB,
    getCollection
};
