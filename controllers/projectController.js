const projectModel = require('../models/projectModel');

const getProjects = (req, res) => {
    projectModel.getProjects((err, result) => {
        if (err) {
            res.status(500).json({ statusCode: 500, message: err });
        } else {
            res.status(200).json({ statusCode: 200, message: 'Success', data: result });
        }
    });
};

const insertProject = (req, res) => {
    const newProject = req.body;
    projectModel.insertProject(newProject, (err, result) => {
        if (err) {
            res.status(400).json({ statusCode: 400, message: err });
        } else {
            res.status(200).json({ statusCode: 200, message: 'Project Successfully added', data: result });
        }
    });
};

module.exports = {
    getProjects,
    insertProject
};
