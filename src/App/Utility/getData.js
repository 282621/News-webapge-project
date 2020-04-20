
function getInfo() {
    const xhr = new XMLHttpRequest();
    const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=6c108268e39148139e2b7a3893af35f0';
    xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const json = JSON.parse(xhr.response);
            console.log(json);
        } else {
            console.log(this.status);
        }
    }

    xhr.onerror = function () {
        console.log("Request Error");
    }

    xhr.setRequestHeader("Authorization", "Basic", "6c108268e39148139e2b7a3893af35f0");
  
    xhr.send();
}

export default getInfo;