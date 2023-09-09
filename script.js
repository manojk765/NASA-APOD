// Get today's date in the format YYYY-MM-DD
var today = new Date().toISOString().split('T')[0];

// Set the max attribute of the date input
document.getElementById('date-input').max = today;

document.getElementById('submit').addEventListener("click", function(){
    
    var date = document.getElementById('date-input').value.split('-');

    
    day = date[2];
    month = date[1];
    year = date[0]; 

    var target = year+'-'+month+'-'+day ;
    const url = 'https://api.nasa.gov/planetary/apod?date='+target+'&api_key=waJpZZY4jhi9HSCRnaoM9G4IgUnOFkT0JbJOUmL8 ';
    const options = {
        method : 'GET',
        headers : { 'X-Api-Key': 'waJpZZY4jhi9HSCRnaoM9G4IgUnOFkT0JbJOUmL8'},
    }

    fetch(url, options)
    .then(result => result.json())
    .then(data => {
        document.getElementById('img').src=data.url ;
        document.getElementById('explanation').innerHTML=data.explanation;
        document.getElementById('title').innerHTML=data.title;
    })
});


	
	


