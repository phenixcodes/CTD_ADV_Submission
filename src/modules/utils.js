/**
 * Gets an access token from Spotify
 * This token allows us to use methods from the Spotify Web API 
 * This function is asynchronous because JavaScript asks Spotify for the token
 * and then waits for a response. As a result, this function returns a promise.
 */
export async function getToken(clientId, clientSecret) {
    // encode app fields in base64 as specified by Spotify
    const b64conv = btoa(clientId + ':' + clientSecret);
    // ask Spotify for the token 
    return await fetch("https://accounts.spotify.com/api/token", {
        body: "grant_type=client_credentials",
        headers: {
            "Authorization": "Basic " + b64conv,
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
    }).then(
        // convert the response to json and extract access_token (or give an error)
        data => data.json().then(json => {
            return json['access_token']
        }),
        err => console.log('something went wrong', err)
    );
}