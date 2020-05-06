
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

            // const arrayList = document.getElementById('main-art');
            // console.log(arrayList.children);

            const fe = document.getElementById('item-a');
            const se = document.getElementById('item-b');
            const te = document.getElementById('item-c');
            const foe = document.getElementById('item-d');

            const array = [fe, se, te, foe];

                for (let i = 0; i <= array.length; i++) {
                    let myArray = array;
                    myArray[i].children[0].textContent = firstNews[i].title;
                    myArray[i].style.backgroundImage = `url('${firstNews[i].urlToImage}')`;
                }
            

            // array[0].style.backgroundImage = `url('${firstNews[3].urlToImage}')`;
            // array[1].style.backgroundImage = `url('${firstNews[4].urlToImage}')`;
            // array[2].style.backgroundImage = `url('${firstNews[5].urlToImage}')`;
            // array[3].style.backgroundImage = `url('${firstNews[6].urlToImage}')`;


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