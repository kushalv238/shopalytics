require('dotenv').config()

const path = require('path');

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const { logger, logEvents } = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const connectDB = require('./config/dbConn');

const PORT = process.env.PORT || 3500;

connectDB();

//built-in middleware
app.use(express.json())
app.use('/', express.static(path.join(__dirname, 'public')));

//3rd party middleware
app.use(cookieParser())
app.use(cors(corsOptions))

//custom middleware
app.use(logger)

//router
app.use('/', require('./routes/root'));
app.use('/products', require('./routes/productRoutes'));

app.all('*', (req, res) => {
    res.status(404);

    if(req.accepts('html')) {
        res.sendFile(path.join(__dirname, '..', 'views', '404.html'));
    } else if(req.accepts('json')) {
        res.json({ message: '404 not found' })
    } else {
        res.type('text').send('404 not found');
    }
})

app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
});

mongoose.connection.on('error', err => {
    console.error(err);
    logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
})