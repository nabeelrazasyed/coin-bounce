const mongoose = require ('mongoose');

const {schema} = mongoose;

const userSchema = new Schema({
    name:{type:String, required: true},
    username:{type:String, required: true},
    email:{type:String, required: true},
    password:{type:String, required: true},
   },
{timestamp: true}
)
module.exports = mongoose.model('User', userSchema, 'Users');