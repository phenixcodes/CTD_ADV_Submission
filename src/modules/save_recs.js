// looping through reccomendations to gather select objects and save them into an array

export function getListOfRecommendationObjects(recommendations) {
    //console.log(recommendations);
    
    let recommendArray = [];
    for (var i = 0;i < recommendations.length;i++){
        
        let list_of = {}
        list_of.name = recommendations[i].name
        list_of.previewUrl = recommendations[i].preview_url
        list_of.artists = recommendations[i].artists
        list_of.images = recommendations[i].album.images[0].url
        list_of.externalUrl = recommendations[i].external_urls.spotify
        recommendArray.push(list_of)
    }
    
   // console.log(recommendArray);
  //return an array of recommendation "objects" 
    return recommendArray;
}
