(function () {
    var people = [
        {
            name: "Ivan",
            age: 24
        },
        {
            name: "Vladimir",
            age: 53
        },
        {
            name: "Vladimir",
            age: 22
        },
        {
            name: "Anna",
            age: 18
        },
        {
            name: "Mikhail",
            age: 32
        },
        {
            name: "Konstantin",
            age: 10
        },
        {
            name: "Darya",
            age: 23
        },
        {
            name: "Olga",
            age: 71
        },
        {
            name: "Zoe",
            age: 60
        },
        {
            name: "Nikolay",
            age: 32
        }
    ];

    function getAverageAge(people) {
        return _.reduce(people, function (currentAgeSum, person) {
            return currentAgeSum + person.age;
        }, 0) / people.length;
    }

    console.log("Average age: " + getAverageAge(people));

    function getSortedAndFilteredList(people) {
        return _.chain(people)
            .filter(function (person) {
                return person.age >= 20 && person.age <= 30;
            })
            .sortBy("age")
            .value();
    }

    getSortedAndFilteredList(people).forEach(function (person) {
        console.log("People between 20 and 30 sorted by age " + person.name);
    });

    function getUniqueAndSortedPeopleList(people) {
        return _.chain(people)
            .filter(function (person) {
                return person.age >= 20 && person.age <= 30;
            })
            .pluck("name")
            .uniq()
            .value()
            .sort(function (name1, name2) {
                return -name1.localeCompare(name2);
            });
    }

    console.log("Unique people between 20 and 30 sorted by age " + getUniqueAndSortedPeopleList(people));

    function getPeopleCountByName(people) {
        return _.countBy(people, "name");
    }

    console.log(getPeopleCountByName(people));
})();