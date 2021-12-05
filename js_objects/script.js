(function () {
    var countries = [
        {
            name: "Italy",
            cities: [
                {
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
                }
            ]
        }, {
            name: "France",
            cities: [
                {
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
                }
            ]
        }, {
            name: "United Kingdom",
            cities: [
                {
                    name: "London",
                    population: 8982000
                }, {
                    name: "Edinburgh",
                    population: 482005
                }
            ]
        }, {
            name: "Spain",
            cities: [
                {
                    name: "Madrid",
                    population: 3223000
                }
            ]
        }
    ];

    getCountriesWithMaxCitiesCount(countries).forEach(function (country) {
        console.log("Countries with max cities count " + country.name);
    });

    console.log(getCountriesPopulation(countries));
})();

function getCountriesWithMaxCitiesCount(countries) {
    var maxCitiesCount = 0;

    if (countries.length !== 0) {
        maxCitiesCount = countries[0].cities.length;
    } else {
        return [];
    }

    maxCitiesCount = countries.reduce(function (previous, current) {
        return Math.max(maxCitiesCount, current.cities.length);
    });

    console.log("Max cities count = " + maxCitiesCount);

    return countries.filter(function (country) {
        return country.cities.length === maxCitiesCount;
    });
}

function getCountriesPopulation(countries) {
    var countryPopulation = {};

    countries.forEach(function (country) {
        var population = 0;
        population = country.cities.reduce(function (accumulator, current) {
            return accumulator + current.population;
        }, population);

        countryPopulation[country.name] = population;
    });

    return countryPopulation;
}