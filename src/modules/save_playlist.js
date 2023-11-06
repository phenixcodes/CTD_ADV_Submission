// looping through json to add select objects to playlistArray
export function getListOfPlaylistObjects(jsonArray) {

    let playlistArray = []

    for (var i = 0; i < jsonArray.length; i++) {
        
        let playlist = {}
        playlist.name = jsonArray[i].name
        playlist.imgUrl = jsonArray[i].images[0].url
        playlist.spotifyUrl = jsonArray[i].external_urls.spotify
        playlistArray.push(playlist)
    }

    return playlistArray;

}