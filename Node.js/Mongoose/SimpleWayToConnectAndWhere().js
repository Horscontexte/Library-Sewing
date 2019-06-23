var mongoose = require('mongoose');
// Model is require
const Test = require('./test.model.js');
// Connecting to the database
mongoose.connect('mongodb://127.0.0.1:27017/Test', {
    useNewUrlParser: true
}).then(() => {
    console.log("INFO - Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
// Query Where
var query = Test.where("Key","Value");
// We must exec the query to get the object
query.exec(function (err, test) {
  if (err) { throw err; }
  console.log("Key : " + test[0].value)
});
