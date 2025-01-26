$(document).ready(function() {
    function fahrenheitToCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    function fahrenheitToKelvin(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9 + 273.15;
    }

    function validateInput(value) {
        const regex = /^-?\d+(\.\d+)?$/;
        return regex.test(value);
    }

    $('#temp-form').submit(function(event) {
        event.preventDefault();
        
        const fahrenheitInput = $('#fahrenheit').val();
        const errorMessage = $('#error-message');
        const resultsDiv = $('#results');
        
        if (!validateInput(fahrenheitInput)) {
            errorMessage.text('Invalid input. Please enter a valid number for Fahrenheit.').removeClass('hidden');
            resultsDiv.addClass('hidden');
            return;
        }
        
        errorMessage.addClass('hidden');
        
        const fahrenheit = parseFloat(fahrenheitInput);
        const celsius = fahrenheitToCelsius(fahrenheit).toFixed(2);
        const kelvin = fahrenheitToKelvin(fahrenheit).toFixed(2);
        
        $('#celsius-result').text(`Temperature in Celsius: ${celsius} °C`);
        $('#kelvin-result').text(`Temperature in Kelvin: ${kelvin} K`);
        resultsDiv.removeClass('hidden');
    });
});
