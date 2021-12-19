(function () {
    var temperatureDiv = document.getElementById("temperature-div")
    var button = document.getElementById("convert-button");
    var textLabel = document.getElementById("temperature-celsius");

    button.addEventListener("click", function () {
        var conversionText = document.getElementById("conversion-text")

        if (conversionText) {
            temperatureDiv.removeChild(conversionText);
        } else {
            conversionText = document.createElement("p");
            conversionText.id = "conversion-text";
        }

        var celsiusDegree = textLabel.value === "" ? NaN : Number(textLabel.value);

        if (isNaN(celsiusDegree)) {
            conversionText.style.color = "#FF0000FF";
            conversionText.textContent = "Введите число градусов Цельсия для перевода в другие шкалы";
        } else {
            conversionText.style.color = "#000";
            conversionText.textContent = celsiusDegree + " градусов Цельсия = " + convertToKelvin(celsiusDegree) +
                " Кельвинов или " + convertToFahrenheit(celsiusDegree) + " Фаренгейт.";
        }

        temperatureDiv.appendChild(conversionText);
        textLabel.value = "";
    });

    function convertToKelvin(celsiusDegree) {
        return (celsiusDegree + 273.15).toFixed(2);
    }

    function convertToFahrenheit(celsiusDegree) {
        return (celsiusDegree * 1.8 + 32).toFixed(2);
    }
})();