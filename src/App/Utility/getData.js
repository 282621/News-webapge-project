
function getInfo() {
    const xhr = new XMLHttpRequest();
    const url = 'http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=6c108268e39148139e2b7a3893af35f0';
    // xhr.open('GET', url, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const json = JSON.parse(xhr.response);
            console.log(json);
            const firstNews = json.articles;
            const firstNewsBar = document.getElementById('firstNewsMoving');
            const secondNewsBar = document.getElementById('secondNewsMoving');
            const thirdNewsBar = document.getElementById('thirdNewsMoving');
            firstNewsBar.textContent = firstNews[0].title;
            secondNewsBar.textContent = firstNews[1].title;
            thirdNewsBar.textContent = firstNews[2].title;
            class News {
                constructor (name, idHtml, idNews) {
                    this.name = name;
                    this.idHtml = idHtml;
                    this.idNews = idNews;
                }

                setProperty() {
                    
                }
            };
        } else {
            console.log(this.status);
        }
    }
    xhr.onerror = function () {
        console.log("Request Error");
    }

    xhr.open('GET', url, true);
    xhr.setRequestHeader("Authorization", "Basic", "6c108268e39148139e2b7a3893af35f0");
    xhr.send();
}

export default getInfo;