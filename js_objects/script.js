var countriesNamespace = countriesNamespace || {};

countriesNamespace.countries = [{
    countryName: "Italy",
    cities: [{
        name: "Rome",
        population: 2873000
    }, {
        name: "Florence",
        population: 382258
    }, {
        name: "Naples",
        population: 3085000
    }, {
        name: "Milan",
        population: 1352000
    }],
}, {
    countryName: "France",
    cities: [{
        name: "Paris",
        population: 2161000
    }, {
        name: "Marseilles",
        population: 861635
    }, {
        name: "Lion",
        population: 513275
    }, {
        name: "Nantes",
        population: 309346
    }],
}, {
    countryName: "United Kingdom",
    cities: [{
        name: "London",
        population: 8982000
    }, {
        name: "Edinburgh",
        population: 482005
    }]
}, {
    countryName: "Spain",
    cities: [{
        name: "Madrid",
        population: 3223000
    }]
}];

(function () {
    var maxCitiesCount = countriesNamespace.countries[0].cities.length;

    countriesNamespace.countries.forEach(country => {
        if (country.cities.length > maxCitiesCount) {
            maxCitiesCount = country.cities.length;
        }
    });

    console.log("Max cities count = " + maxCitiesCount)

    var maxCitiesCountCountries = countriesNamespace.countries.filter(country => {
        if (country.cities.length === maxCitiesCount) {
            return country;
        }
    });

    maxCitiesCountCountries.forEach(country => {
        console.log("Country with max cities count " + country.countryName);
    });
})();

(function () {
    var countryPopulation = [];

    countriesNamespace.countries.forEach(country => {
        var generalPopulation = 0;
        country.cities.forEach(city => {
            generalPopulation += city.population;
        });

        countryPopulation.push({
            country: country.countryName,
            generalPopulation: generalPopulation
        });
    });

    countryPopulation.forEach(country => {
        console.log("Country: " + country.country + ", general population = " + country.generalPopulation)
    });

})();
