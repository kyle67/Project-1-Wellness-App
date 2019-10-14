function getApiCall() {
fetch("https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple", {
"method": "GET",
"headers": {
    "x-rapidapi-host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
    "x-rapidapi-key": "2e4ad3828amshb40ea2bf43cf9cbp1801d4jsn8799057cfff6"
}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});
}

getApiCall()