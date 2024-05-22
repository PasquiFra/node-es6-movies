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

console.log(collection);

class Movie {


    constructor(title, year, genre, rating, type) {
        this.title = title
        this.year = year
        this.genre = genre
        this.rating = rating
        this.type = type
    }



    // toString() {

    // }
}

class TvSerie extends Movie {

    constructor(title, year, genre, rating, type, seasons) {
        super(title, year, genre, rating, type);
        this.seasons = seasons;
    }
}

