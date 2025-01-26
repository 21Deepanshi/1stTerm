// Function to display TV shows on the page
function displayTVShows() {

    let tvShows = retrieveData();

    let tvShowList = document.getElementById("tv-show-list");

    // Clear previous content
    tvShowList.innerHTML = "";

    // Loop through the tvShows array and create list items for each TV show
    tvShows.forEach(function(tvShow) {
        
        let listItem = document.createElement("li");
        let episodesLink = document.createElement("a");
        let tvShowInfo = document.createElement("p");

        // Pass TV show title as URL parameter
        episodesLink.href = "pages/episodes.html?tvshow=" + encodeURIComponent(tvShow.title);
        episodesLink.textContent = tvShow.title;
        listItem.appendChild(episodesLink);

        // Display some info about the show
        tvShowInfo.innerHTML = "<strong>Genre:</strong> " + tvShow.genre + "<br><strong>Number of Episodes:</strong> " + tvShow.episodes.length;
        listItem.appendChild(tvShowInfo);

        // Add this item to the list of TV shows
        tvShowList.appendChild(listItem);
    });
}

// Create dummy data, if necessary
createDummyData();

// Call the displayTVShows function to populate the list
displayTVShows();