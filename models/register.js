const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var register = new Schema({
    email:({
        type:String
    })
})
const MyModel = mongoose.model('web', register);
module.exports = MyModel