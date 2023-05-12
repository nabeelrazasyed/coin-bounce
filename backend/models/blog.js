const mongoose = require ('mongoose');

const {schema} = mongoose;

const blogSchema = new Schema({
    title:{type:String, required: true},
    content:{type:String, required: true},
    photoPath:{type:String, required: true},
    author:{type:mongoose.SchemaTypes.ObjectId, ref: 'user'}
},
{timestamp: true}
)
module.exports = mongoose.model('Blog', blogSchema, 'blogs');