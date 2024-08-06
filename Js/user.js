// Dummy API endpoint
const apiUrl = 'https://dummyjson.com/users/5';

// Fetch data from the API
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Update profile fields with API data
        username="pler"
        document.getElementById('username').innerText = data.username;
        document.getElementById('email').innerText = data.email;
    })
    .catch(error => console.error('Error:', error));