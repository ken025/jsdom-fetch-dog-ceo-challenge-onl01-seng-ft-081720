// console.log('%c HI', 'color: firebrick')

function dogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => showImages(json));
}

function showImages(images){
    const container = document.getElementById('dog-image-container')
    images.message.forEach(image => {
        const img = document.createElement('img')
        container.appendChild(img)
        img.src = image
    });
}

    document.addEventListener("DOMContentLoaded", function() {    
        dogImages()    
        breedNames()    
    });

    function breedNames(){
        const breedUrl = 'https://dog.ceo/api/breeds/list/all'
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => showBreeds(json));
    }

    function showBreeds(breeds){
    const ul = document.querySelector('#dog-breeds');
    allBreeds = breeds.message
    for(const breed in allBreeds){
        const li = document.createElement("li")
        ul.appendChild(li)
        li.innerText = breed
        li.className = "breeds-list-item"
        li.addEventListener('click', function(event) {
            event.target.style.color = "pink"
        });
    } 
}
