const express = require("express");
const app = express();
const cors = require("cors");
const dbConnection = require('./dbConnection');
const projectRouter = require('./routers/projectRouter');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 5500;

// Connect to DB
dbConnection.connectDB((err) => {
    if (err) {
        console.log('Error connecting to DB:', err);
        process.exit(1);
    } else {
        console.log('MongoDB Connected');
    }
});

// Use the router
app.use('/api/project', projectRouter);

app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
