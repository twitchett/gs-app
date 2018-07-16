const server = require('http').createServer()
const socket = require('socket.io')(server)

const events = [
  { name: 'Rick Sanchez', workoutId: 'swimming', checkedIn: true },
  { name: 'Karl Hyde', workoutId: 'badminton', checkedIn: true },
  { name: 'Bugs Bunny', workoutId: 'yoga', checkedIn: true },
  { name: 'Peter Rabbit', workoutId: 'yoga', checkedIn: true },
  { name: 'Boris Johnson', workoutId: 'swimming', checkedIn: true },
  { name: 'Jeff Mills', workoutId: 'hiit', checkedIn: true },
  { name: 'Gandalf the Grey', workoutId: 'swimming', checkedIn: true },
  { name: 'Princess Peach', workoutId: 'kettlebells', checkedIn: true },
  { name: 'Harry Kane', workoutId: 'hiit', checkedIn: true },
  { name: 'Harry Potter', workoutId: 'badminton', checkedIn: true },
  { name: 'Marge Simpson', workoutId: 'yoga', checkedIn: true }
]

const triggerEvents = () => {
  let n = 0
  const intervalId = setInterval(() => {
    console.log('emitting PARTICIPANT_CHANGE', events[n])
    socket.emit('PARTICIPANT_CHANGE', events[n])
    n += 1
    if (n === events.length) {
      clearInterval(intervalId)
    }
  }, 2000)
}

server.listen(3000, () => console.log('listening on *:3000'))

socket.on('connection', socket => {
  console.log('A client just joined on ', socket.id)
  triggerEvents()
})

