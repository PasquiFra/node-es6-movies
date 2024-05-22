// creo l'array collection con tutti i film e serie 
const collection = [
    {
        title: "Inception",
        year: 2010,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "movie",
        seasons: ''
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genre: "Action",
        rating: 9.0,
        type: "movie",
        seasons: ''
    },
    {
        title: "Stranger Things",
        year: 2016,
        genre: "Drama",
        rating: 8.7,
        type: "tv",
        seasons: 4
    },
    {
        title: "Breaking Bad",
        year: 2008,
        genre: "Crime",
        rating: 9.5,
        type: "tv",
        seasons: 5
    },
    {
        title: "Interstellar",
        year: 2014,
        genre: "Sci-Fi",
        rating: 8.6,
        type: "movie",
        seasons: ''
    },
    {
        title: "The Mandalorian",
        year: 2019,
        genre: "Sci-Fi",
        rating: 8.8,
        type: "tv",
        seasons: 3
    },
    {
        title: "The Godfather",
        year: 1972,
        genre: "Crime",
        rating: 9.2,
        type: "movie",
        seasons: ''
    },
    {
        title: "Game of Thrones",
        year: 2011,
        genre: "Fantasy",
        rating: 9.3,
        type: "tv",
        seasons: 8
    }
];

//console.log(collection);

//creo le variabili movies e series
const movies = [];
const tvSeries = [];

// Creo la classe Movie
class Movie {

    genres = [];


    constructor(title, year, genre, rating, type) {
        this.title = title
        this.year = year
        this.genre = genre
        this.rating = rating
        this.type = type
    }

    setGenres(genre) {
        if (!this.genres.includes(genre)) {
            this.genres.push(genre)
        };
    }

    toString() {
        return `${this.title} è un film di genere ${this.genre}. 
        E' stato rilasciato nel ${this.year} ed ha un voto di ${this.rating}.`
    }

}

// Creo la classe TvSerie
class TvSerie extends Movie {

    constructor(title, year, genre, rating, type, seasons) {
        // con super() riprendo le variabili della classe madre
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }

    toString() {
        return `${this.title} è una serie tv di genere ${this.genre}. 
        La prima stagione è stata rilasciato nel ${this.year} ed in totale sono state prodotte ${this.seasons} stagioni. 
        Ha un voto di ${this.rating}.`
    }
}

const createInstance = collection.map(({ title, year, genre, rating, type, seasons }) => {

    if (type === 'movie') {
        const movie = new Movie(title, year, genre, rating, type);

        movies.push(movie);

        //console.log(movie.toString());

        movie.setGenres(movie.genre);

    }
    if (type === 'tv') {
        const tvSerie = new TvSerie(title, year, genre, rating, type, seasons);

        tvSeries.push(tvSerie);

        //console.log(tvSerie.toString())
    }

})

//console.log(movies)

const genreToFilter = 'Crime';

function averageRatingByGenre(movies, genreToFilter) {
    const filteredMovies = movies.filter(movie => movie.genre === genreToFilter);
    //console.log(filteredMovies)
    const total = filteredMovies.reduce((sum, movie) => sum + movie.rating, 0);
    //console.log(total)
    const avg = total / filteredMovies.length;
    return `La media dei voti per il genere ${genreToFilter} è: ${avg}`
}

const avgRating = averageRatingByGenre(movies, genreToFilter);

//console.log(avgRating);


