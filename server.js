const express = require('express');
const connectDb = require('./config/dbConnection.js');
const errorHandler = require('./middleware/errorHandler.js');
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv').config();


connectDb(); //connection to database
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));
app.use("/api/contacts", require('./routes/contactRoutes.js'));
app.use("/api/users", require('./routes/userRoutes.js'));
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})