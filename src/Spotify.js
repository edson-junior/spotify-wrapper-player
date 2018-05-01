
import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: AppSettings.token,
});

export default spotify;
