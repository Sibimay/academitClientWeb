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

    (function () {
        var maxCitiesCount = 0;

        if (countries !== []) {
            maxCitiesCount = countries[0].cities.length;
        }

        maxCitiesCount = countries.reduce(function (previous, current) {
            return Math.max(maxCitiesCount, current.cities.length);
        });

        console.log("Max cities count = " + maxCitiesCount)

        var maxCitiesCountCountries = countries.filter(function (country) {
            if (country.cities.length === maxCitiesCount) {
                return country;
            }
        });

        maxCitiesCountCountries.forEach(function (country) {
            console.log("Country with max cities count " + country.name);
        });
    })();

    (function () {
        var countryPopulation = {};

        countries.forEach(function (country) {
            countryPopulation[country.name] = country.cities.reduce(function (previous, current) {
                console.log(current.population);
                console.log(previous.population);

                if (typeof previous.population !== "undefined" && previous.population !== 0) {
                    return previous.population + current.population;
                }

                console.log("Undef");
                return current.population;
            });
        });

        console.log(countryPopulation)
    })()
})();
