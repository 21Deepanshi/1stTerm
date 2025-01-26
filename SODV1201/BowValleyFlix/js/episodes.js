// Function to parse URL parameters
function getUrlParameter(name) {
    // Define a Regular Expression
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

    // Get the querystring part of the URL (including the ?)
    let query = location.search;
    //alert(query);

    // Run the regular expression on the querystring
    let results = regex.exec(query);
    //alert(results[1]);

    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Function to display episodes based on TV show title
function displayEpisodes(tvShowTitle) {

    let tvShows = retrieveData();

    let tvShow = tvShows.find(function(show) {
        return show.title === tvShowTitle;
    });

    // Display the TV Show title as the header
    let pageTitle = document.getElementById("tv-show-title");
    pageTitle.innerHTML = tvShowTitle + " Episodes";

    if (tvShow) {

        let episodeList = document.getElementById("episode-list");

        // Clear previous content
        episodeList.innerHTML = "";

        // Loop through the episodes array of the selected TV show and create list items for each episode
        tvShow.episodes.forEach(function(episode) {

            let listItem = document.createElement("li");

            listItem.innerHTML = "<strong>Title:</strong> " + episode.title + "<br>" +
                                    "<strong>Year:</strong> " + episode.year + "<br>" +
                                    "<strong>Rating:</strong> " + episode.rating + "<br>" +
                                    "<strong>Runtime:</strong> " + episode.runtime;
            
            episodeList.appendChild(listItem);
        });
    } else {
        // Display a message if the TV show is not found
        let episodeList = document.getElementById("episode-list");
        episodeList.innerHTML = "Sorry! TV Show not found.";
    }
}

// Call the displayEpisodes function with the TV show title from URL parameter
let tvShowTitle = getUrlParameter("tvshow");
displayEpisodes(tvShowTitle);