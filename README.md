# Real-Time Workout App

An app to monitor and manage workout participants in real-time.

## About

The project consists of a node server (`server.js`) and a React Native app (under `/src`). The app maintains a list of participants for each workout. By going into each workout, the user can see the current participants and add new ones.

The server sends events to the native app over a socket.io connection, to update the lists of participants.

It was developed under Node v8.9.4 and npm 5.6.0 with `create-react-native-app`.

## Setup

Just `git clone` the repo and `npm install` the dependencies.

## Running the app

The app can be tested using an Expo client. Disclaimer: it has only been be tested with the Expo app on an Android phone. Hopefully it won't have any problems on iOS, but I haven't verified.

The node server listens on port `3000`. For the client to be able to connect, you need to set the `REACT_NATIVE_HOST_IP` environment variable to point to your machine's IP address (no need to include the port or protocol).

To start the node server and run the app:

```
REACT_NATIVE_HOST_IP=XX.XX.XX.XX npm start
```

You can then connect by scanning the QR code on the Expo app.

Once the app is connected, the server will emit a series of `PARTICIPANT_CHANGE` events. You can check the logs in the terminal and verify the participants in the app itself. (Note: see Unfinished Business)


## Tests

Tests can be run using:

```
npm test
```

## Troubleshooting

* If the Expo app won't connect check your network adapters: if you have a docker bridge or virtualbox interface on the host machine, you may need to remove it.
* If the server won't start, check you don't have something running on port 3000 (note: it needs to be manually killed)

## Unfinished Business

Due to time constraints, the following has not been implemented:

* The `checkedIn` state/action/button for each participant.
* An event from the client to the server when a participiant is manually added, so other app instances can be updated.
