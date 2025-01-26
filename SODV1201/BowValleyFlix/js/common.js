// Define the Episode constructor function
function Episode(title, year, rating, runtime) {
    this.title = title;
    this.year = year;
    this.rating = rating;
    this.runtime = runtime;
}

// Define the TVShow constructor function
function TVShow(title, genre, episodes) {
    this.title = title;
    this.genre = genre;
    this.episodes = episodes;
}

// Function to save data to localStorage
// localStorage is saved in the browser. Find it in Chrome at: Developer Tools > Application > Storage > Local Storage
function saveData(tvShows) {
    localStorage.setItem('tvShows', JSON.stringify(tvShows));
}

// Function to retrieve data from localStorage
function retrieveData() {
    let storedData = localStorage.getItem('tvShows');
    if (storedData) {
        return JSON.parse(storedData);
    }
    return [];
}

function createDummyData() {

    let testData = retrieveData();

    if (!testData.length) {
        // Create some dummy seed data - episodes
        const episodesOfBreakingBad = [];
        const episodesOfGameOfThrones = [];
        const episodesOfFriends = [];
        for (let i = 1; i <= 10; i++) {
            episodesOfBreakingBad.push(new Episode("Breaking Bad Episode " + i, 2008, "TV-MA", "48 minutes"));
            episodesOfGameOfThrones.push(new Episode("Game of Thrones Episode " + i, 2011, "TV-MA", "55 minutes"));
            episodesOfFriends.push(new Episode("Friends Episode " + i, 1994, "TV-14", "22 minutes"));
        }

        // Create some dummy seed data - TV shows
        const tvShows = [
            new TVShow("Breaking Bad", "Crime", episodesOfBreakingBad),
            new TVShow("Game of Thrones", "Fantasy", episodesOfGameOfThrones),
            new TVShow("Friends", "Comedy", episodesOfFriends)
        ];

        saveData(tvShows);
    }
}