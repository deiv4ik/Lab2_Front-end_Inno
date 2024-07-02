const email = 'd.islamov@innopolis.university';
const apiUrl = 'https://fwd.innopolis.university/api/hw2';
const comic = 'https://fwd.innopolis.university/api/comic';

async function getComit() {
    const url = new URL(apiUrl);        
    url.searchParams.append('email', email);

    const responce = await fetch(url);
    const id = await responce.json();

    const url_comic = new URL(comic);
    url_comic.searchParams.append('id', id);

    fetch(url_comic)
    .then(response => response.json())
    .then(data => {
        const comicImg = document.getElementById('comic-img');
        const comicTitle = document.getElementById('comic-title');
        const comicDate = document.getElementById('comic-date');

        comicImg.src = data.img;
        comicImg.alt = data.title;

        comicTitle.textContent = data.title;
        
        const date = new Date(data.day);
        comicDate.textContent = date.toLocaleDateString();
    })
    .catch(error => console.error('Error:', error));
}

getComit();