// Lisätään funktiot, joilla annettu numero lasketaan netistä haettujen muunnosten kanssa yhteen
function kgToLbs(kg) {
    return kg * 2.20462;
}

function lbsToKg(lbs) {
    return lbs / 2.20462;
}

function cmToInch(cm) {
    return cm / 2.54;
}

function inchToCm(inch) {
    return inch * 2.54;
}
//Lisätty laskut metreille ja litroille
function metersToFeet(meter) {
    return meter * 3.2808399;
}

function feetToMeters(feet) {
    return feet / 3.2808399;
}

function literToOunce(liter) {
    return liter * 35.1950642;
}

function ounceToLiter(ounce) {
    return ounce / 35.1950642;
}
// Etsitään index.html:stä "convertButton", eli "Muunna"-painike. "click" aktivoituu, kun painiketta klikataan
document.getElementById('convertButton').addEventListener('click', () => {

    // Haetaan syötetty arvo/numero "inputValue". Syötteen arvo muuttuu numeroksi
    const inputValue = Number(document.getElementById('inputValue').value);

    // Haetaan valittu arvo dropdown valikosta
    const conversionType = document.getElementById('conversionType').value;

    // Määritellään muuttuja "result"
    let result;

    // Switch-case suorittaa laskun valinnan perusteella
    switch (conversionType) {

        // Valinnan perusteella lasketaan inputValue-funkiot ja muutetaan ne kahden desimaalin tarkkuuteen. Loppuun lisätään tekstiä kertomaan muunnoksen yksikön.
        case 'kgToLbs':
            result = kgToLbs(inputValue).toFixed(2) + ' lbs';
            break;

        case 'lbsToKg':
            result = lbsToKg(inputValue).toFixed(2) + ' kg';
            break;

        case 'cmToInch':
            result = cmToInch(inputValue).toFixed(2) + ' inches';
            break;

        case 'inchToCm':
            result = inchToCm(inputValue).toFixed(2) + ' cm';
            break;

        case 'metersToFeet':
            result = metersToFeet(inputValue).toFixed(2) + ' feet';
            break;

        case 'feetToMeters':
            result = feetToMeters(inputValue).toFixed(2) + ' meters';
            break;

        case 'literToOunce':
            result = literToOunce(inputValue).toFixed(2) + ' oz';
            break;

        case 'ounceToLiter':
            result = ounceToLiter(inputValue).toFixed(2) + ' l';
            break;
        
    }

    // Lopuksi lisätään tulos id=result elementtiin index.html-tiedostoon. Tekstissä pitäisi näkyä "Result: ___ lbs/kg/inches/cm"
    document.getElementById('result').textContent = `Result: ${result}`;
});
