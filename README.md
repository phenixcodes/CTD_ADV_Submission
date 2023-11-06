# Code The Dream Advanced Class Application by Phenix 
#### This is fully functional web program that retrieves Spotify's metadata to display an authorized user's Spotify content onto a webpage. 

<img width="1249" alt="Screen Shot 2023-11-04 at 6 20 21 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/b8c0721a-93e8-46a9-8e1b-b7241b1ced00">
<img width="1091" alt="Screen Shot 2023-11-05 at 10 29 49 AM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/92dce336-0bf6-478a-80e9-6c7ae4be7acb">


##### The following tools were used to build this project:
* Replit
* Bootstrap
* Spotify Web API
* Blood, Sweat, & Tears

## How To Use This Project :


### Step One - Create A Spotify User & Developer Account :

* Access Spotify's Developer website here | https://developer.spotify.com/

<img width="1062" alt="Screen Shot 2023-11-05 at 4 03 34 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/1ef3414d-2a15-4e6e-a272-de35d02502cd">


* Sign into your Spotify account or create a Spotify account to then make a Developer account (Developer accounts must be linked to an existing Spotify account).
* 
* Then, you will be redirected back to the developer site. If not, you can click the link above.
  
* Once you've signed in, you will click your profile icon and then click "Dashboard".


<img width="189" alt="Screen Shot 2023-11-05 at 2 47 35 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/022de9f5-cfbc-40df-ae31-7072a624edfc">


### Step Two - Create An Application :

* You will be redirected the "Client Dashboard". Then, click the "Create App" button.

<img width="208" alt="Screen Shot 2023-11-05 at 2 48 15 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/ff5db9f8-2577-470f-91d6-2f34725de63e">


* Fill in all the necessary information. For the website portion, you can add "www.spotify.com" to bypass the requirement. Once this is complete, you will be given credentials. We will need these keys to identify you as a user and to populate the webpage with your information.

<img width="1246" alt="Screen Shot 2023-11-05 at 2 48 46 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/7b415774-064c-4d8c-98f4-e9ebccd233f8">
<img width="309" alt="Screen Shot 2023-11-05 at 2 49 05 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/eb183fe8-4275-462c-ae22-7f4b71b18dec">


### Step Three - Locate User Credentials :

* Your app will have its own dashboard page on the Spotify Developer website. Locate and click the settings button to reveal your "Client ID" & "Client Secret"
 
<img width="1249" alt="Screen Shot 2023-11-05 at 3 05 27 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/520f2758-630b-49ea-808f-5324cae4d26b">

<img width="1250" alt="Screen Shot 2023-11-05 at 2 50 40 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/25192562-2178-4827-97d7-690b2b98432f">


* Your Spotify User ID is located in your Spotify user account settings here : https://www.spotify.com/us/account/overview/

<img width="1066" alt="Screen Shot 2023-11-05 at 4 20 59 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/af79f265-fb7f-4f4a-973e-59793561866f">

<img width="1054" alt="Screen Shot 2023-11-05 at 4 21 23 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/c1924050-c948-425e-a7c3-65752e731a1b">


* Click "Edit Profile" and your username will be revealed.


### Step Four - Input Client Credentials Into "identify.js" :

* We will need your "User ID", "Client ID", & "Client Secret" to populate your metadata from the Spotify Web API.

* Enter in all of the above information into the "identify.js" file. Then, run the program to see your data displayed on to the webpage.

<img width="685" alt="Screen Shot 2023-11-05 at 5 28 37 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/4d26ac74-b381-4437-a3c5-164cb078e106">


### Optional Steps :

* Add your own Artist, Album, & Genre Seeds to the "client_seeds.js" file to see what recommendations you get!

<img width="810" alt="Screen Shot 2023-11-05 at 5 30 08 PM" src="https://github.com/phenixcodes/CTD_ADV_Submission/assets/123134810/c0fff596-6e8f-46f9-874a-381e3a8186a1">

* You can reference all genre seeds in the "genre_seed.txt" file!

  
### You can access a live demo of this project here on Replit :
https://replit.com/@madebyphenix/PhenixCTDSubmit

* Fork the project to input your own credentials to view in real time!
* All modules of the webpage are hyperlinked and clickable. It will take you to the playlist and reccomended songs. 


### Potential Roadblocks :

* To display the playlist metadata onto the page, the user's playlists must be public. Developers can only fetch public information from Spotify's API. 
* Spotify's API only allows up an array of 4 (5 elements) per seed to allow the recommendations api to render. Therefore, only 5 artists, albums, and genres per call. The API can be choppy and at times, you can only input less than 5 elements per seed. Ultimately, you'll have to play around to see what it allows.
* APIs often implement a rate limit. This limits how many times you can access their API in a given time frame. This can be very limiting and frustrating for developers. You can reference Spotify's Documentation fro more information below :

https://developer.spotify.com/documentation/web-api/concepts/rate-limits

https://developer.spotify.com/documentation/web-api/concepts/api-calls

### Project Reflections :
This project was a challenging venture but was well within my scope of programming knowledge and my javascript skillset. To get the ball rolling, I inherited a skeleton of API calls to Spotify's Web API. From there, I developed a fully functional web application that utilizes Javascript functions to display API modules to a web page. 
Throughout this experience, I relied on and utilized my knowledge of variables, loops, functions, JS libraries, DOM, HTML, & CSS.

### What I'd do differently : 
I would simplify the logic of making API calls and use mock functions to test my program and to remain within the rate limit. Additionally, I would further distribute the main js code into separate js files to make debugging much smoother.

### Further Refinements : 
* Make web application Mobile-Web Friendly (Screen size responsive)
* Refine CSS elements to break the length of song titles after 20 or so characters on the recommendations page
* Fix the pagination sidebar and reduce the opacity of each card that displays on the recommendations page

### Concluding Statements : 
Thank you for taking the time to review and test my application submission. I've learned a lot of best practices from this project. I'm looking forward to further developing this program to be more efficient, responsive, and aesthetic.
