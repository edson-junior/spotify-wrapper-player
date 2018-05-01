/* eslint no-undef: "error" */
/* eslint-env browser */

import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: window.AppSettings.token,
});

export default spotify;
