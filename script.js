//M

updateView()
//V
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="container">
        <div class="lights">
        <div id="redLight"></div>
        <div id="yellowLight"></div>
        <div id="greenLight"></div>
    </div>
    <div class="controls">
        <button class="Go" onclick="turnGreen()">Go!</button>
        <button class="Stop" onclick="turnRed()">Stop!</button>
    </div>
    </div>
    `;
}
//C
let redLight = document.getElementById('redLight')
let greenLight = document.getElementById('greenLight')
let yellowLight = document.getElementById('yellowLight')


function turnGreen() {
    
    redLight.style.backgroundColor= '';
    yellowLight.style.backgroundColor= 'yellow';
    greenLight.style.background= 'green';
    setTimeout(() => {
        redLight.style.backgroundColor= '';
        yellowLight.style.backgroundColor='';
        greenLight.style.background= 'green';
    }, 1000);
}

function turnRed() {
    redLight.style.backgroundColor= '';
    yellowLight.style.backgroundColor= 'yellow';
    greenLight.style.background= '';
    setTimeout(() => {
        redLight.style.backgroundColor= 'red';
        yellowLight.style.backgroundColor='';
        greenLight.style.background= '';
    }, 1000);
}
