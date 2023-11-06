// Pick seed values of artists. Returns an array of artist seed values.
// Artist seeds are string values that can be found in the URL of an artist's page on Spotify
// For example, Lil Nas X's URL is https://open.spotify.com/artist/7jVv8c5Fj3E9VhNjxT4snq
// His seed value would be "7jVv8c5Fj3E9VhNjxT4snq"

export function getArtistSeeds() {
    
    var artistSeeds = ["2ygluM9w0lmulZrMJ1pI0i"];
    return artistSeeds;
    
}

// Returns an array of album seed values. 
export function getAlbumSeeds() {
    
    var albumSeeds = ["7t7tfXDhXiQpAV2uNfYWWG", "1SMqO3mYNla8IxJIEFkQ7A", "4F2XqvfLTTsIlM0QR52kX7", "0Rumz8oZFRw2oirlaBBf47", "2FuT85CBZhzZ8dndFdtwXn"];
    return albumSeeds;
    
}

// Return an array containing genre seed strings 
export function getGenreSeeds() {
    
    var genreSeeds = ["new-release"];
    return genreSeeds;
    
}