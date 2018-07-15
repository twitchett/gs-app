# Workout App

A simple app for viewing/adding participants to a list of workouts. Created with `create-react-native-app`.

The app consists of a node server (`server.js`) and a react-native app (under `/src`).

It was developed under 

## Setup

Just `git clone` and `npm install`.

## Running the app

The app can be tested using an Expo client. Disclaimer: it has only been be tested with the Expo app on an Android phone. It should work on iOS, but I haven't verified.

The node server opens a socket.io connection on port `3000`. For the client to be able to connect, you need to set the `WEBSOCKET_URL` environment variable to point to your machine's IP address (no need to include the port.

To start the node server and run the app:

```
WEBSOCKET_URL=XXX.XXX.XXX.XXX npm start
```

You can then connect by scanning the QR code on the Expo app.

Once connected, the server will emit a series of `PARTICIPANT_CHANGE` events. You can check the logs in the terminal and verify the participants in the app itself. (Note: see Unfinished Business)


## Tests

Tests can be run using:

```
npm test
```

## Troubleshooting

* If the Expo app won't connect check your network adapters: if you have a docker bridge or virtualbox interface on the host machine, you may need to remove it.

## Unfinished Business

Due to time constraints, the following has not been implemented:

* The `checkedIn` state/action/button for each participant.
* The client doesn't send an event to the server when a participiant is manually added, so other app instances won't be updated
