
const api_service = 'https://api.tvmaze.com/search/shows?q='

const tv_form = document.querySelector('#tv-form');
tv_form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const address = document.querySelector('input[name=q]').value;
    
    try{
        const response = await fetch(api_service + address);
        const data = await response.json();
        
        dataCollector(data);
    }catch(error){
        console.log(error)
    }
})

async function dataCollector(data){
    const resultContainer = document.getElementById('results');
    resultContainer.innerHTML = ''

    for(let i = 0; i < data.length; i++){
        const show_info = {
            "name": data[i]['show']['name'],
            "url": data[i]['show']['url'],
            "thumbnail": data[i]['show']['image']['medium'],
            "summary": data[i]['show']['summary']
        }

        const article = document.createElement('article');

        const showName = document.createElement('h2');
        showName.textContent = show_info.name;

        const showLink = document.createElement('a');
        showLink.href = show_info.url;
        showLink.target = '_blank';
        showLink.textContent = 'More details';

        const showImage = document.createElement('img');
        showImage.src = show_info.thumbnail;
        showImage.alt = show_info.name;

        const showSummary = document.createElement('div');
        const tempdiv = document.createElement('div');
        tempdiv.innerHTML = show_info.summary;
        showSummary.textContent = tempdiv.textContent || tempdiv.innerText;

        article.appendChild(showName);
        article.appendChild(showLink);
        article.appendChild(showImage);
        article.appendChild(showSummary);

        resultContainer.appendChild(article);
    }

}