var topics = ["Workouts", "Nutrition", "Health", "BMI Calculator"]

function displayTopicInfo() {
	var workouts = $(this).attr("data-name");
	var queryURL =  "https://gabamnml-health-v1.p.rapidapi.com/bmi?weight=60&height=1.70" 

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
$(document).on("click", 

fetch("https://gabamnml-health-v1.p.rapidapi.com/bmi?weight=60&height=1.70", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "gabamnml-health-v1.p.rapidapi.com",
        "x-rapidapi-key": "2e4ad3828amshb40ea2bf43cf9cbp1801d4jsn8799057cfff6"
    }
})
.then(response => {
    console.log(response);
})
.catch(err => {
    console.log(err);
});



