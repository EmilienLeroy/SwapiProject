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

//all room create
let rooms = [];
//all game create
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
	//get a random number
	let room = Math.round( Math.random() * 100000 )

	//verify if the room not already exist
	while(rooms.includes(room)){
		room = Math.round( Math.random() * 100000 )
	}

	//save id room
	rooms.push(room)

	//generate the game
	game.push({
		id: room,
		player: [],
		nbQuestion:0
	})

	//send id room
	res.json({
		id : room
	})
})

/**
 * On socket connection
 * TODO
 * implement leave room at end game
 */
io.sockets.on('connection', function(socket) {
	/**
	 * connection room
	 */
	socket.on('room', function(room) {
		//join the room
		socket.join(room.id);

		//find the game and add the player at the game
		let currentGame = game.find(function(element){
			if(element.id == room.id){
				element.player.push({id:element.player.length+1,name: room.player, score: 0})
				return element;
			}
		})

		//send the current game with the new player
		io.sockets.in(room.id).emit('player', currentGame);
	});

	/**
	 *socket when a player answer
	 */
	socket.on('answer', function(newGame){
		//find the current game and update the reuskt
		let currentGame = game.find(function(element){
			if(element.id == newGame.id){
				element.player = newGame.player
				element.nbQuestion++
				return element;
			}
		})

		//Send the new score or redirect to the result page if the game is finish
		if(currentGame.nbQuestion < 6){
			io.sockets.in(newGame.id).emit('answer', currentGame);
		}else{
			io.sockets.in(newGame.id).emit('resutl', currentGame);
		}
	})

});



/**
 * Run the server
 */
http.listen(process.env.PORT || 8888,()=>{
    console.log("Server run on localhost:8888");
})