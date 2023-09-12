const convertTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temperature');
    const valueTemp = temperature.options[tempSelected.selectedIndex].value;

  
    const cTof = (c) => {
        let fahrenheit = ((c * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    
    const fToc = (f) => {
        let celsius = ((f - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'c') {
        document.getElementById("result").innerHTML = cTof(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fToc(inputTemp) + "&#176; Celsius";
    }
}
