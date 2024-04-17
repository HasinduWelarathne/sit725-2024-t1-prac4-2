const dbConnection = require('../dbConnection');

const insertProject = (project, callback) => {
    const projectCollection = dbConnection.getCollection();
    projectCollection.insertOne(project, callback);
};

const getProjects = (callback) => {
    const projectCollection = dbConnection.getCollection();
    projectCollection.find({}).toArray(callback);
};

module.exports = {
    insertProject,
    getProjects
};
