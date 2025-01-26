// Function to handle form submission
function handleFormSubmit(event) {

    // Prevent the form from doing its normal submission
    event.preventDefault();

    // Get form values
    let title = document.getElementById("title").value;
    let genre = document.getElementById("genre").value;

    // Create new TVShow object with no episodes.
    let newTVShow = new TVShow(title, genre, []);

    // Retrieve existing TV shows from localStorage
    let tvShows = retrieveData();

    // Add new TV show to the array
    tvShows.push(newTVShow);

    // Save updated array to localStorage
    saveData(tvShows);

    // Redirect back to index.html
    window.location.href = "../index.html";
}

// Add form submission event listener
document.getElementById("add-tv-show-form").addEventListener("submit", handleFormSubmit);