# spotify-wrapper-player

Small music player for spotify's samples.

![Screen Shot](https://github.com/willianjusten/spotify-wrapper-player/blob/master/example/screenshot.png "Screen Shot")

> This application uses [spotify-wrapper](https://github.com/willianjusten/spotify-wrapper) library to get informations and songs from Spotify.



### How to Run

First go to Spotify Developers API and create your [Token](https://developer.spotify.com/console/get-search-item/). **Remember that the token will expire in 60min**

```javascript
// first import the heart of this app, spotify-wrapper:
import SpotifyWrapper from 'spotify-wrapper';

// then create an instance of it, with your Token
const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE',
});

// Go nuts!
const albums = spotify.search.albums('Incubus');

albums.then(data => console.log(data))

```

Install the dependencies:
```
npm i
```
Run your application:
```
npm start
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Dropwizard - Bla bla bla
* Maven - Maybe
* Atom - ergaerga

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/edson-junior/spotify-wrapper-player/tags). 

## Authors

* **[Edson Junior](https://github.com/edson-junior)** - author
* **[Willian Justen](https://github.com/willianjusten)** - author of the [course](https://www.udemy.com/js-com-tdd-na-pratica/) and starter files

See also the list of [contributors](https://github.com/edson-junior/spotify-wrapper-player/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
