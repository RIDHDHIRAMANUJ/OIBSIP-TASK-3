function convertTemperature() {
    const temperatureInput = document.getElementById('temperature').value;
    const unit = document.getElementById('unit').value;
    let convertedTemperature;

    if (unit === 'celsius') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        document.getElementById('result').innerText = `${temperatureInput}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        document.getElementById('result').innerText = `${temperatureInput}°F is ${convertedTemperature.toFixed(2)}°C`;
    } else if (unit === 'kelvin') {
        convertedTemperature = parseFloat(temperatureInput) + 273.15;
        document.getElementById('result').innerText = `${temperatureInput} K is ${convertedTemperature.toFixed(2)}°C`;
    } else {
        document.getElementById('result').innerText = 'Invalid unit selection.';
    }
}
