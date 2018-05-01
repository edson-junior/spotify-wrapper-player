/* eslint no-undef: "error" */
/* eslint-env browser */

import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  // unfortunatelly because of the way the spotify-wrapper plugin
  // was developed, it is necessary to comment/uncomment this fake token
  // in order to run the tests
  // token: 'BQD1emHdgnpHskVIGfhSbQqkXTUZmHXOERgQAXVeM4yKMzv7tDh8J-GpxDFwSp2krQE1EtZOVnUEMxPobRg',
  token: window.AppSettings.token,
});

export default spotify;
