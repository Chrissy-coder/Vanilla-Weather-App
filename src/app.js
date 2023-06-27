function displayTemperature(response) {
  console.log(response.data);
}

let apiKey = "8f63022fa4b60b22c3t7fe8f63b45ob9";
let apiUrl =
  "https://api.shecodes.io/weather/v1/current?query=New-York&key=8f63022fa4b60b22c3t7fe8f63b45ob9&units=metric";

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);
