//appends saved API metadata to HTML elements to display playlist information onto a webpage [DOM]

export function addPlaylistToHTML(playlistArray) {
    
    // add playlist data to the DOM
    const p = document.getElementById('playlists-render');

    //loop thhrough the playlist array
    for(var i = 0; i < playlistArray.length; i++){ 
        
        //add div to playlists-render in p tag
        const div = document.createElement('div');
        p.appendChild(div); 
        // create the link
        const link = document.createElement('a'); 
        link.setAttribute('href', playlistArray[i].spotifyUrl);
        // add link to div
        div.appendChild(link); 

        //add image with Bootstrap rounded class
        const img = document.createElement('img');
        img.src = playlistArray[i].imgUrl;
        img.classList.add('image');
        img.classList.add('rounded');
        // add link to image
        link.appendChild(img);

        // add text to h4 tag
        const title = document.createElement('h6');
        title.innerHTML = playlistArray[i].name; 
        // create class for title
        title.classList.add('title'); 
        // add h4 to div
        div.appendChild(title); 
    }   
}
