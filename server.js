const { PeerServer } = require('peer');

const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/myapp',
  allow_discovery: true
});

console.log(`✅ PeerJS Server is running on port ${process.env.PORT || 9000}`);
