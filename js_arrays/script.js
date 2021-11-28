(function () {
    var array = [1, 7, 12, 3, 4, -5, 16, 2, 15, 21];
    console.log("Initial array " + array.join(", "));

    array.sort(function (e1, e2) {
        return e2 - e1;
    });
    console.log("Array sorted desc " + array.join(", "));

    var startSubArray = array.slice(0, 5);
    console.log("First 5 elements of array " + startSubArray.join(", "));

    var endSubArray = array.slice(array.length - 5, array.length);
    console.log("Last 5 elements of array " + endSubArray.join(", "));

    var sum = 0;
    array.forEach(element => {
        if (element % 2 === 0) {
            sum += element;
        }
    });
    console.log("Sum of even numbers of array = " + sum);
})();

(function () {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        array[i] = i;
    }

    var squaredEvenNumbers = array.filter(element => {
        return element % 2 === 0;
    }).map(element => {
        return element * element;
    });

    console.log("Squared even numbers from 1 to 100: " + squaredEvenNumbers.join(", "))
})();