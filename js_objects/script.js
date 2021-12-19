(function () {
    var countries = [
        {
            name: "Italy",
            cities: [
                {
                    name: "Rome",
                    population: 2873000
                },
                {
                    name: "Florence",
                    population: 382258
                },
                {
                    name: "Naples",
                    population: 3085000
                },
                {
                    name: "Milan",
                    population: 1352000
                }
            ]
        },
        {
            name: "France",
            cities: [
                {
                    name: "Paris",
                    population: 2161000
                },
                {
                    name: "Marseilles",
                    population: 861635
                },
                {
                    name: "Lion",
                    population: 513275
                },
                {
                    name: "Nantes",
                    population: 309346
                }
            ]
        },
        {
            name: "United Kingdom",
            cities: [
                {
                    name: "London",
                    population: 8982000
                },
                {
                    name: "Edinburgh",
                    population: 482005
                }
            ]
        },
        {
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

    console.log(getCountriesPopulations(countries));

    function getCountriesWithMaxCitiesCount(countries) {
        var maxCitiesCount = countries.reduce(function (accumulator, country) {
            return Math.max(accumulator, country.cities.length);
        }, 0);

        return countries.filter(function (country) {
            return country.cities.length === maxCitiesCount;
        });
    }

    function getCountriesPopulations(countries) {
        var countriesPopulations = {};

        countries.forEach(function (country) {
            countriesPopulations[country.name] = country.cities.reduce(function (countryPopulation, city) {
                return countryPopulation + city.population;
            }, 0);
        });

        return countriesPopulations;
    }
})();