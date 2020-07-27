// let
let favoriteCityId = "rome";
console.log(favoriteCityId);

favoriteCityId = "paris";
console.log(favoriteCityId);

// const
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
// citiesId = [];    /!\ constante
citiesId.push("tokyo");
console.log(citiesId);


// Création d'objet
/**
 * Obtenir la température d'une ville
 * 
 * @param cityId 
 */
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;

    return {
        city: city,
        temperature: temperature
    };

}

// Température à Paris
const weather = getWeather(favoriteCityId);
console.log(weather);

// Affectation destructurée
const {
    city,
    temperature
} = weather;
console.log(city);
console.log(temperature);

// Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);

/**
 * Représente un voyage
 */
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    /**
     * Getter prix
     */
    get price() {
        return this._price;
    }

    /**
     * Setter prix
     */
    set price(price) {
        this._price = price;
    }

    /**
     * Affichage
     */
    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
    }

    /**
     * Voyage par défaut
     */
    getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

}

// Voyage à Paris
const parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

// Ajout du prix
parisTrip.price = 100;
console.log(parisTrip.toString());

// Affichage du voyage par défaut
const defaultTrip = parisTrip.getDefaultTrip();
console.log(defaultTrip.toString());

/**
 * Voyage gratuit
 */
class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString() {
        return `FreeTrip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
    }
}

// Création d'un voyage gratuit
const freeTrip = new FreeTrip("nantes", "Nantes", "img:nantes.jpg");
console.log(freeTrip.toString());