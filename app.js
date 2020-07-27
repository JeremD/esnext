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
     * Voyage par défaut
     */
    getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }

    /**
     * Affichage
     */
    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
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

/**
 * Service de voyage
 */
class TripService {
    constructor() {
        // Set of trips (id, name, imageUrl)
        this.tripSet = new Set();
        this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    // Recherche du nom
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            console.log("Searching a trip...");
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                for (const trip of this.tripSet) {
                    if (trip.name == tripName) {
                        resolve(trip);
                    }
                }
                reject(`No trip with name ${tripName}`);
            }, 2000)
        });
    }
}

/**
 * Service de prix
 */
class PriceService {
    constructor() {
        // Map of 2 trips (clé == identifiant, valeur == prix)
        const priceMap = new Map();
        priceMap.set({
            id: 'paris',
            price: 100
        });
        priceMap.set({
            id: 'rio-de-janeiro',
            price: 800
        });
    }

    // Recherche de l'id
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            console.log("Searching a price...");
            setTimeout(() => {
                // ici l'exécution du code est asynchrone
                if (this.priceMap.has(tripId)) {
                    resolve(this.priceMap.get(tripId));
                }

                reject(`No price found for id ${tripId}`);
            }, 2000)
        });
    }
}

// Recherche des infos du voyage à Paris
const parisVoyage$ = new TripService();
parisVoyage$.findByName("Paris")
    .then(voyage => console.log("Trip Found :", voyage))
    .catch(err => console.log(err));

const parixPrixVoyage$ = new PriceService();
parixPrixVoyage$.findPriceByTripId("paris")
    .then(price => console.log("Price Found : ", price))
    .catch(err => console.log(err));