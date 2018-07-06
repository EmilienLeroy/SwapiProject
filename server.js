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
let game = [];

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
	game.push({
		id: room,
		player: []
	})

	res.json({
		id : room
	})
})

io.sockets.on('connection', function(socket) {
	socket.on('room', function(room) {
		socket.join(room.id);
		console.log('joined room'+room);
		let currentGame = game.find(function(element){
			if(element.id == room.id){
				element.player.push({id:element.player.length+1,name: room.player, score: 0})
				return element;
			}
		})

		console.log(currentGame)
		io.sockets.in(room.id).emit('player', currentGame);
	});

	socket.on('answer', function(newGame){
		let currentGame = game.find(function(element){
			if(element.id == newGame.id){
				element.player = newGame.player
				return element;
			}
		})
		io.sockets.in(newGame.id).emit('answer', currentGame);
	})
});



/**
 * Run the server
 */
http.listen(8888,()=>{
    console.log("Server run on localhost:8888");
})