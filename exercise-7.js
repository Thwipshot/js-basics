
const movie = {
    title: 'cleaning',
    releaseYear: 2019,
    rating: 2.4,
    director: 'Nobody'
}

showProperties(movie);

function showProperties(obj) {
    for ( let key in obj) {
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}