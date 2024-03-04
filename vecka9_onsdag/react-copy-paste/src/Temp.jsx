fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => setDog(data));

$.ajax({
  url: 'https://dog.ceo/api/breeds/image/random',
  method: 'GET',
  success: function (data) {
    console.log(data.message); // Log the URL of the random dog image
  },
  error: function (error) {
    console.error('Error:', error);
  }
});