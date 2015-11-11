var express = require("express");
var app = express();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/zeta_db';

app.set("port", process.env.PORT || 5000);

app.get('/people', function(req,res){
    var theseZetas = [];

    //SQL Query > SELECT data from table
    pg.connect(connectionString, function (err, client, done) {
        var query = client.query("SELECT id, name, location, favenumber FROM zetatable");

        // Stream results back one row at a time, push into theseMsgs array
        query.on('row', function (row) {
            theseZetas.push(row);
        });

        // After all data is returned, close connection and return results
        query.on('end', function () {
            client.end();
            return res.json(theseZetas);
        });

        // Handle Errors
        if (err) {
            console.log(err);
        }
    });
});









app.get("/*", function(req,res,next){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file))
});

app.listen(app.get("port"), function(req,res,next){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;