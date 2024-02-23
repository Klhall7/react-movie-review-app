# OMDB Movie Review App- Getting Started

This React app utilizes the OMDB API to search for movies and display their information along with user reviews.

- Register for an API Key from [OMDB API](http://www.omdbapi.com/) (Free version limited to 1000 requests/day).
- Test out the URL in Postman, examine the JSON object you get as a response
- Create a new react project using Vite and start building the app! Remember to run a server and use Chrome DevTools for debugging. 

## Goals

- Accept user input via a form that receives a movie title.
- Search for that movie via the OMDB API Endpoint: http://www.omdbapi.com/?t=[some movie title]&apikey=[your api key] You can change the endpoint if you would like to search by something other than the movie title.
- Return that movies's information: 
    Movie poster
    Movie title
    Release year
    Plot description
    Ratings
- Allow a user to list multiple movies

## UI

- Render the movie information using "card" layout [Look here for an example](https://uxplanet.org/using-card-based-design-to-enhance-ux-51f965ab70cb)
- Append new movie cards with each search.

### Level 1 Goals

- Load the lookup form in its own component.
- Clear the form's state after each search.
- Pass the movie information into its own component via props.
- Load the movie information component inside the form component.
- Load the form component in `App.jsx`.

### Level 2 Goals

- Create a second form to submit your own review for each movie.
- Have your review display below the ratings returned from OMDB.
- The form appears in each movie's card component.
- Save reviews in the state for each card.

TIP: You probably want to have the form appear in each movie's card component.
     You'll save your reviews in the state for each card.

### Level 9000

- Try to use React's Context API to globally store the movie and review information
- Can you have a single form to submit any review, but make sure that the review shows up with the correct movie? 🤔
