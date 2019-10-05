var topics = ["Circuits", "Weights", "Bodyweight", "Cardio"]

function displayTopicInfo() {
	var workoutType = $(this).attr("data-name");
    // API link goes below
    
    var queryURL = 
    
    $.ajax({
		url: queryURL, 
		method: "GET"
	}).done(function(response) {
		//sets the Length for the next loop
		
		//Clear Previous images
		
		// Create For Loop here to show multiple Giphy Responses
		
		//Creating a Div for Topic
		
		// Storing the rating data in variable
		
		// Creating Element to display rating 
		
		// Adding Rating to Topic Div
		
		
		// Create Image Element
		
		//update image with more attributes
		
		//Give images a class
		
		// Appending the Image
		
		// Write Topic Div to HTML document
		
	    // Clears  Workout Buttons Div

	    // looping through topics
	
		// Code to Dynamically Generate Buttons for each Topic in topics array
		
		// Adding a class of Topic to our Button
		
		// Adding a class for styling
		
		// Adding a data-attribute
	
		// adding attr for Bootstrap
		
		// Button Text
		
		// Adding the Button to the Buttons Div
	
        // This function handles events where a Topic button is clicked
	
        // This line grabs the input from the textbox
    
        // Adding movie from the textbox to our array
    
        // Clear the form field for next addition
    
    
        // Adding a click event listener to all elements with a class of "topic"

        // Calling the renderButtons function to display the intial buttons
