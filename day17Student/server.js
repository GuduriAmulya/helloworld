const express = require('express');
const studentsRouter = require('./routes/students');
const facultyRouter = require('./routes/faculty');

const app = express();
const BASE_URL = 'http://10.11.16.246:4000';
// Middleware to parse JSON bodies
app.use(express.json()); // convert json format to javaascript objects.

// Use routers
app.use('/students', studentsRouter);
app.use('/faculty', facultyRouter);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the School Management System API!');
});

// Start the server at port 4000
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


//http://localhost:3000/students