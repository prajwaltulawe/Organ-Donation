const mongoose = require('mongoose')
require('dotenv').config();
mongoose.Promise = global.Promise
// mongoose.set('debug', true);

mongoose.connect(process.env.CONNECTION_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

module.exports = {mongoose}