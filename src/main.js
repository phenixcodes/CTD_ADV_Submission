import { getListOfPlaylistObjects } from './modules/save_playlist.js'
import { addPlaylistToHTML } from './modules/show_playlist.js'
import { getArtistSeeds, getAlbumSeeds, getGenreSeeds } from './modules/client_seeds.js'
import { getListOfRecommendationObjects } from './modules/save_recs.js'
import { addRecommendationToHTML } from './modules/show_recs.js'
import { getToken } from './modules/utils.js'
import { userId, clientId, clientSecret } from './modules/identify.js'

/**
 * getUserPlaylists searches for public playlists by a user
 * token is authorized by Spotify (getToken) 
 * @param userId: the user's Spotify ID
 */
async function getUserPlaylists(token) {
    return await fetch("https://api.spotify.com/v1/users/" + userId + "/playlists", {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })
        .then(
            data => {
                return data
                    .json() // extract json object
                    .then( // once that's done (promise),
                        json => {
                            // look thru the different 'items' returned,
                            return getListOfPlaylistObjects(json['items']);
                        }
                    );
            },
            // error handling function
            err => console.log('Something went wrong!', err)
        );
}

/**
 * Uses an array of playlist name objects to create HTML list items showcasing real public playlists. 
 */
function renderPlaylists(playlistArray) {
    addPlaylistToHTML(playlistArray)
}
/**
 * getRecommendations generates recommendations based on seed songs, genres, albums and (optionally) other parameters that you'd like to use to generate songs
 * @param token: a client_credentials token authorized by Spotify (getToken in utils) 
 * @param seed_artists: list of seed artist ID values (up to 5)
 * @param seed_genres: list of seed genre values (up to 5)
 * @param seed_albums: list of seed album ID values (up to 5)
 * @param ...: add more parameters to pass to the recommendations API!!! 
 */
async function getRecommendations(token, seed_artists, seed_genres, seed_albums) {
    // create a query using the arguments
    // the query is sent in the URL of our request
    var query = [];
    if (seed_artists && seed_artists.length > 0) {
        query.push("seed_artists=" + seed_artists.join(','));
    }
    if (seed_genres && seed_genres.length > 0) {
        query.push("seed_genres=" + seed_genres.join(','))
    }
    if (seed_albums && seed_albums.length > 0) {
        query.push("seed_albums=" + seed_albums.join(','))
    }
    // https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA

    // call the spotify Recommendations endpoint 
    // return a `recommendations` JavaScript array that contains objects 

    return await fetch(`https://api.spotify.com/v1/recommendations?${query.join('&')}`, {
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        },
        method: 'GET'
    })
        .then(
            data => {
                return data
                    .json()
                    .then(json => {
                        return getListOfRecommendationObjects(json['tracks'])
                    }
                    )
            },
            // error handling function
            err => console.log('Something went wrong!', err)
        );
}

/**
 * Uses an array of recommendation objects to create HTML list items showcasing your public playlists. 
 */
function renderRecommendations(reccomendArray) {
    addRecommendationToHTML(reccomendArray);
}
/**
 * Adds content to the HTML page when it loads
 */
async function render_page() {
    // Get spotify token using clientId and clientSecret values specified in constants.js
    let token = await getToken(clientId, clientSecret);
    console.log('token', token);

    // display content depending on the page we're currently on
    if (document.title == "Playlist Library") {
        // Call getUserPlaylists and save the array result.
        let playlists = await getUserPlaylists(token);

        // Call renderPlaylists (pass in the array found in the previous step)
        renderPlaylists(playlists);
    }
    if (document.title == "Recommendations") {
        // Call getArtistSeeds, getGenreSeeds, and getAlbumSeeds and store array results in variables
        let artistSeeds = getArtistSeeds();
        let genreSeeds = getGenreSeeds();
        let albumSeeds = getAlbumSeeds();

        // Use getRecommendations (pass in seeds) and save the array result.
        let recommendations = await getRecommendations(token, artistSeeds, genreSeeds, albumSeeds)

        // Call renderRecommendations (pass in the array found in the previous step)
        renderRecommendations(recommendations);
    }
}

//console.log('print account info');
//console.log(userId, clientId, clientSecret);

render_page()