var express = require('express')
var server = require('http').Server(app)
var socketio = require('socket.io')

var app = express()
var socket = socketio(server)

const participants = [
  { name: 'Rick Sanchez', workoutId: 'swimming', checkedIn: true },
  { name: 'Karl Hyde', workoutId: 'badminton', checkedIn: true },
  { name: 'Peter Rabbit', workoutId: 'yoga', checkedIn: true },
  { name: 'Boris Johnson', workoutId: 'swimming', checkedIn: true },
  { name: 'Jeff Mills', workoutId: 'hiit', checkedIn: true },
  { name: 'Gandalf the Grey', workoutId: 'swimming', checkedIn: true },
  { name: 'Princess Peach', workoutId: 'kettlebells', checkedIn: true },
  { name: 'Rick Sanchez', workoutId: 'swimming', checkedIn: false },
  { name: 'Karl Hyde', workoutId: 'badminton', checkedIn: false },
  { name: 'Peter Rabbit', workoutId: 'yoga', checkedIn: false }
]

server.listen(3000, () => console.log('listening on *:3000'))

socket.on('connection', socket => {
  console.log('A client just joined on ', socket.id);
})

let n = 0
const intervalId = setInterval(() => {
  console.log('emitting participant_change', participants[n])
  socket.emit('participant_change', participants[n])
  n += 1
  if (n === participants.length) {
    clearInterval(intervalId)
  }
}, 1500)