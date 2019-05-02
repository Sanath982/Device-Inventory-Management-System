const { Schema } = require("mongoose");
const Mongoose = require("mongoose");
Mongoose.Promise = global.Promise;
Mongoose.set('useCreateIndex', true);
const url = "mongodb://127.0.0.1:27017/systemData";

const SystemSchema = Schema({
    systemId : Number,
    systemName :  String,
    user : String
},{collection : "Data", timestamps: true})

let SystemCollection = {};

SystemCollection.getSystemCollection = () => {
    return Mongoose.connect(url, { useNewUrlParser: true }).then((database) => {
        return database.model('Data', SystemSchema)
    }).catch((error) => {
        let err = new Error("Could not connect to Database");
        err.status = 500;
        throw err;
    })
}


module.exports = SystemCollection;