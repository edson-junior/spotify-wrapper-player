import 'jsdom-global/register'
import { expect } from "chai";

import renderAlbumInfo from '../src/AlbumInfo';

describe('AlbumInfo', () => {
  const data = {
    "album_type" : "album",
    "artists" : [
      {
        "name" : "Incubus",
      }
    ],
    "id" : "6peEdPVO73WtgGah5sEhX4",
    "images" : [
      {
        "height" : 640,
        "url" : "https://i.scdn.co/image/59a536f0bf0ddaa427e4c732a061c33fe7578757",
        "width" : 640
      }, {
        "height" : 300,
        "url" : "https://i.scdn.co/image/9d6866c93e476bd8e7aa7771f9b68db119e076c6",
        "width" : 300
      }, {
        "height" : 64,
        "url" : "https://i.scdn.co/image/3ad2701e3f6fe51404f3a4de7a5b2c7b745bad16",
        "width" : 64
      }
    ],
    "name" : "The Essential Incubus",
    "type" : "album",
    "tracks": {
      "total": 18
    }
  };

  const markup = `
    <img class="album-image" src="${data.images[2].url}" alt="${data.artists[0].name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Músicas</p>`

  const element = document.createElement('div');

  it('should create and append the markup given then correct data', () => {
    renderAlbumInfo(data, element);
    expect(element.innerHTML).to.be.eql(markup);
  });
});
