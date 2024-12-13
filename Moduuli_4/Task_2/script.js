
const api_service = 'https://api.tvmaze.com/search/shows?q='

const tv_form = document.querySelector('#tv-form');
tv_form.addEventListener('submit', async function(evt) {
    evt.preventDefault();

    const address = document.querySelector('input[name=q]').value;
    
    try{
        const response = await fetch(api_service + address);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error)
    }
})