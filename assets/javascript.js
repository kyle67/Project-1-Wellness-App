var topics = ["Circuits", "Weights", "Bodyweight", "Cardio"]

function displayTopicInfo() {
	var workouts = $(this).attr("data-name");
	var queryURL =  // API goes here (I think)

	$.ajax({
		url: queryURL, 
		method: "GET"
	}).done(function(response) {
		//sets the Length for the next loop
		var results = response.data;
		//Clear Previous images
		$("#workouts").empty();
				
		//Creating a Div for Topic
		var topicDiv = $("<div class='workouts'>");
		// Storing the rating data in variable
		var rating = response.data[i].rating;
		// Creating Element to display rating 
		var pRate = $("<p>").text("Rating: " + rating);
		// Adding Rating to Topic Div
		topicDiv.append(pRate);
		
		
		}


function renderButtons() {
	// Clears WorkoutButtons Div
	$("#workoutButtons").empty();

	// Looping through topics
	for (var i = 0; i < topics.length; i++) {
		// Code to Dynamically Generate Buttons for each Topic in topics array
		var a = $("<button>");
		// Adding a class of Topic to our Button
		a.addClass("topic");
		// Adding a class for styling
		a.addClass("btn btn-lg");
		// Adding a data-attribute
		a.attr("data-name", topics[i]);
		// adding attr for Bootstrap
		a.attr("type", "button");
		// Button Text
		a.text(topics[i]);
		// Adding the Button to the Buttons Div
		$("#workoutButtons").append(a);
	}
}

// This function handles events where a Topic button is clicked
$("#addWorkout").on("click", function(event) {
	event.preventDefault();
    // This line grabs the input from the textbox
    var topic = $("#workout-input").val().trim();
    
    topics.push(topic);
    // Clear the form field for next addition
    $("form").trigger("reset")

    renderButtons();
    });

// Adding a click event listener to all elements with a class of "topic"
$(document).on("click", ".topic", displayTopicInfo);
// Calling the renderButtons function to display the intial buttons
renderButtons();



// Add a listener for all elements with class of "gif"
$(document).on("click", flipAnimate);



function flipAnimate() {
	var item = $(this).attr("id");
	item = "#"+item;
	// console.log(item);
	var state = $(item).attr("data-state");
	// console.log(state);
	if (state === "still") {
        $(item).attr("src", $(item).attr("data-animate"));
        $(item).attr("data-state", "animate");
        // console.log(this);
      } else {
        $(item).attr("src", $(item).attr("data-still"));
        $(item).attr("data-state", "still");
        // console.log(this);
      };
};
