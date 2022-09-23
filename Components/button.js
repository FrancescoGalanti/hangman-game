 let RandomNumbers = Math.floor(Math.random() * 10) + 1;

 console.log(RandomNumbers);
fetch("https://swapi.py4e.com/api/people/" + RandomNumbers + "/").then(function (response) {
	// The API call was successful!

	return response.json();

}).then(function (data) {
	// This is the JSON from our response
  /*   let arrays = [];

	arrays = data.results;

    arrays.forEach(element => {
        console.log(element.name)
    }); */
    console.log(data.name);

    let name = data.name.replace(/\s+/g, '').split("");
    console.log(name);
    let names = "";
    name.forEach(element => {
        names += `<button class ="names"></button>`
    });

    document.getElementById('names-list').innerHTML = names;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


