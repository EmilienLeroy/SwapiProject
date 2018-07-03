/**
 * Server Http
 */
const express = require('express');
const app = express();
const http = require('http').Server(app);

/**
 * Socket
 */
global.io = require('socket.io')(http);

/**
 * Webpack
 */
const webpack = require("webpack");
const config = require("./config/webpack.config");

/**
 * generate bundle js
 */
webpack(config, (err, stats)=>{
	console.log("Compiled :) "+ new Date())
})

/**
 * Static file for the index html
 */
app.use("/js",express.static(__dirname + "/dist"))
app.use("/css",express.static(__dirname + "/public/css"))

/**
 * Send the index file
 */
app.get("/",(req,res)=>{
	res.sendFile(__dirname + "/public/index.html");
})


/**
 * Run the server
 */
http.listen(8888,()=>{
    console.log("Server run on localhost:8888");
})