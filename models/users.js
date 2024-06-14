const {mongoose} = require('../db/mongoose')

var userSchema = mongoose.Schema({
    loginId: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        minlength: 1,
        required: true,
        trim: true,
    }
})


var User = mongoose.model('user', userSchema)

module.exports = {User}