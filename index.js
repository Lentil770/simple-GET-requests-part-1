function fetchDogImg() {
    let numberDogs = $('#dogNumber').val();
    fetch('https://dog.ceo/api/breeds/image/random/' + numberDogs)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert('failed attempt!'))
};


function watchButton() {
    $('.dog-img-number').on('submit', function(event) {
        event.preventDefault();
        fetchDogImg();
        console.log('watchButton ran');
    })
};

$(console.log('page ready and running'),
    watchButton()
);