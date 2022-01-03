document.addEventListener("DOMContentLoaded", function () {
    var convertButton = document.getElementById("convert-button");
    var textLabel = document.getElementById("temperature-celsius");

    convertButton.addEventListener("click", function () {
        var conversionText = document.getElementById("conversion-text");
        var conversionError = document.getElementById("conversion-error");
        var celsiusDegree = textLabel.value === "" ? NaN : Number(textLabel.value);

        if (isNaN(celsiusDegree)) {
            conversionText.style.display = "none";
            conversionError.style.display = "unset";
        } else {
            conversionError.style.display = "none";
            conversionText.style.display = "unset";

            conversionText.textContent = celsiusDegree + " градусов Цельсия = " + convertToKelvin(celsiusDegree) +
                " Кельвинов или " + convertToFahrenheit(celsiusDegree) + " Фаренгейт.";
        }

        textLabel.value = "";
    });

    function convertToKelvin(celsiusDegree) {
        return (celsiusDegree + 273.15).toFixed(2);
    }

    function convertToFahrenheit(celsiusDegree) {
        return (celsiusDegree * 1.8 + 32).toFixed(2);
    }
});