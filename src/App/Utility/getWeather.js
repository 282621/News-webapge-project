// let long;
// let lat;

// let tempereatureDegree = document.getElementById('temperatureDegree');
// let location = document.getElementById('location');

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;
//         });
//     } else {
//         console.log('Geolocation is not supported by a browser!');
//     }

// const proxy = 'https://cors-anywhere.herokuapp.com/';
// const api = `${proxy}https://api.darksky.net/forecast/ce99a3f610e5d3a6e387bb938f5a1667/${lat},${long}`;

// const getWeather = () => {
//     fetch(api)
//     .then(response => {
//         return response.json();
//     })

//     .then(data => {
//         console.log(data);
//         const {
//             tempereature
//         } = data.currently;
//         tempereatureDegree.textContent = tempereature;
//     })
// }

// export default getWeather;