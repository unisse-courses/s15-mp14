const mongoose = require('mongoose');

const databaseURL = 'mongodb://localhost:27017/flightsdb';

const options = { useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false };


mongoose.connect(databaseURL, options)
const UserSchema = new mongoose.Schema({
        name :{ type : String, required : true} ,
        initial: { type : String, required : true} ,
        lname :{ type : String, required : true} ,
        addr: { type : String, required : true} ,
        emadd:{ type: String, required : true} ,
        password: { type : String, required : true} ,
        username: { type : String, required : true} ,
        gender: { type : String, required : true} ,
        birthday :{ type : String, required : true} ,
        count : { type : String, required : true} ,
        prov: { type : Boolean, required:true}
});


module.exports = mongoose.model('user', UserSchema);
