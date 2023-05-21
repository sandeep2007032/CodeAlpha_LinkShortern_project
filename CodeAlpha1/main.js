const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // logic to convert celcius into farenheit
    const celToFah = (cel) => {
        let farenheit = Math.round((cel * 9 / 5) + 32);
        return farenheit;
    }

    // logic to convert farenheit into celcius 
    const fahToCel = (fehr) => {
        let celcius = Math.round((fehr - 32) * 5 / 9);
        return celcius;
    }


    let result;

    if (valueTemp == 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Farenheit`;

    } else {
        result = fahToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Celcius`;

    }
}

