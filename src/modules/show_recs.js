/**
 * Creates a div element for each recommendation object and appends it as a child to the <div> tag on the recommendations.html page. In addition, adds Bootstrap classes & CSS Styling for design and aesthetics.
 */

export function addRecommendationToHTML(recommendArray) {
    
    const recs = document.getElementById("recommended");

    for(var i = 0; i < recommendArray.length; i++){
        
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('bg-black');
        div.classList.add('bg-gradient');
        div.classList.add('card');
        div.classList.add('text-white');
        div.style.cssText = 'display: inline-block;';
        recs.appendChild(div);

        const link = document.createElement('a');
              link.setAttribute('href', recommendArray[i].externalUrl);
              // add link to div
              div.appendChild(link);     

        const img = document.createElement('img');
              img.src = recommendArray[i].images;
              img.classList.add('image');
              img.classList.add('rounded');
              // add img to link
              link.appendChild(img);

        const title = document.createElement('h6');
              title.innerHTML = recommendArray[i].name;
              title.classList.add('title');
              title.style.cssText = 'font-weight: bold;';
              div.appendChild(title);

        const artistName = document.createElement('h6');
              artistName.innerHTML = recommendArray[i].artists[0].name;
              artistName.classList.add('artist')
              div.appendChild(artistName);
    }
}
