var express = require('express')
var server = require('http').Server(app)
var socketio = require('socket.io')

var app = express()
var socket = socketio(server)

const participants = [
  { name: 'Rick Sanchez', workoutId: 'swimming', checkedIn: true },
  { name: 'Karl Hyde', workoutId: 'badminton', checkedIn: true },
  { name: 'Bugs Bunny', workoutId: 'yoga', checkedIn: true },
  { name: 'Peter Rabbit', workoutId: 'yoga', checkedIn: true },
  { name: 'Boris Johnson', workoutId: 'swimming', checkedIn: true },
  { name: 'Jeff Mills', workoutId: 'hiit', checkedIn: true },
  { name: 'Gandalf the Grey', workoutId: 'swimming', checkedIn: true },
  { name: 'Princess Peach', workoutId: 'kettlebells', checkedIn: true },
  { name: 'Rick Sanchez', workoutId: 'swimming', checkedIn: false },
  { name: 'Karl Hyde', workoutId: 'badminton', checkedIn: false },
  { name: 'Peter Rabbit', workoutId: 'yoga', checkedIn: false }
]

const triggerEvents = () => {
  let n = 0
  const intervalId = setInterval(() => {
    console.log('emitting PARTICIPANT_CHANGE', participants[n])
    socket.emit('PARTICIPANT_CHANGE', participants[n])
    n += 1
    if (n === participants.length) {
      clearInterval(intervalId)
    }
  }, 2000)
}

server.listen(3000, () => console.log('listening on *:3000'))

socket.on('connection', socket => {
  console.log('A client just joined on ', socket.id)
  triggerEvents()
})

