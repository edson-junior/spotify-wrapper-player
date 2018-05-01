export default function renderAlbumdata(data, element) {
  const elem = element;
  const markup = `
    <img class="album-image" src="${data.images[2].url}" alt="${data.artists[0].name}">
    <p class="album-title">${data.name}</p>
    <p class="album-artist">${data.artists[0].name}</p>
    <p class="album-counter">${data.tracks.total} Músicas</p>`;

  elem.innerHTML = markup;
}
