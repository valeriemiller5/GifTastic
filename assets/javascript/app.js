$(document).ready(function() {
    var queryURL = "";
    var topics = ["happy", "sad", "angry", "confused", "pensive", "tired", "energetic", "love"]

//creates initial buttons based on pre-selected strings in topics array
function createButtons() {
    $("#moodButtons").empty();
    for(var i = 0; i < topics.length; i++) {
        $("#moodButtons").append("<button type='button' class='btn btn-primary' value='" + topics[i] + "'>" + topics[i] + "</button>");
    }
}

// adds code to the html form created to create new buttons based on user's search selection

// code that pulls Gifs from the GIPHY API based on the value (variable "topics") of the buttons
$(document).on("click", ".btn", function ()  {
    var search = $(this).attr("value");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=10&rating=g&api_key=CEXRYTpc0lyQNlqz2ZVgDZVL3Xc4B8OR";
    
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
        var results = response.data;
          for (var j = 0; j < results.length; j++) {
            var gifDiv = $("<div class='item'>");
            var rating = results[j].rating;
            var p = $("<p>").text("Rating: " + rating);
            var moodImage = $("<img>");
            moodImage.attr("src", results[j].images.fixed_height_still.url);
            gifDiv.prepend(p);
            gifDiv.prepend(moodImage);

            console.log(response); // used this to check image/animation choices provided in the API
            $(".imageResults").prepend(gifDiv);
          }
    })
});

createButtons();
});