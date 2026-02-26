const content = document.querySelector('#content');

window.addEventListener('load' , ()=>{
    getUsers();
})

function getUsers(){
    let html = ''
    // FETCH API
    fetch('https://web.dragonball-api.com/', { mode: 'cors' })
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            data.forEach(element => {
                html += `<li>${element.name} ${element.ki}</li>`;
            });
            content.innerHTML = html;
        })
        

}

