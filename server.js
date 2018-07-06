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

let rooms = [];

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
 * Generate a unique room
 */
app.get("/generateRoom", (req,res)=> {
	let room = Math.round( Math.random() * 100000 )

	while(rooms.includes(room)){
		room = Math.round( Math.random() * 100000 )
	}

	rooms.push(room)

	res.json({
		id : room
	})
})

io.sockets.on('connection', function(socket) {
	socket.on('room', function(room) {
		socket.join(room);
		console.log('joined room'+room);
	});
});



/**
 * Run the server
 */
http.listen(8888,()=>{
    console.log("Server run on localhost:8888");
})