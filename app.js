// import functions and grab DOM elements
import { makeStatsString } from './utils.js';
const headDropdown = document.getElementById('head-dropdown');
const middleDropdown = document.getElementById('middle-dropdown');
const bottomDropdown = document.getElementById('bottom-dropdown');
const headEl = document.getElementById('head');
const middleEl = document.getElementById('middle');
const bottomEl = document.getElementById('bottom');
const reportEl = document.getElementById('report');
const catchphrasesEl = document.getElementById('catchphrases');
const catchphraseInput = document.getElementById('catchphrase-input');
const catchphraseButton = document.getElementById('catchphrase-button');
const countEl = document.querySelector(`.count`);

// set state for how many times the user changes the head, middle, and bottom
let headCount = 0;
let middleCount = 0;
let bottomCount = 0;

// set state for all of the character's catchphrases
let catchphrases = [];


headDropdown.addEventListener('change', () => {
    // get the value of the head dropdown
    const id = headDropdown.value; 
    // increment the head change count state
    headCount++;
    // update the dom for the head
    headEl.style.backgroundImage = `url(./assets/${id}-head.png)`;
    // middleEl.textContent = '';
    // let img = document.createElement('img');
    // img.src = `./assets/${id}-head.png`;
    // headEl.appendChild(img);
    // update the stats to show the new count
    // reportEl.textContent = `You changed the head ${headCount} times`;    
    // console.log(headCount);
    // console.log(headDropdown);
    displayStats();

});


middleDropdown.addEventListener('change', () => {
    // get the value of the middle dropdown
    const id = middleDropdown.value;
    
    // increment the middle change count state
    middleCount++;
    // update the dom for the middle
    // let img = document.createElement('img');
    // img.src = `./assets/${id}-middle.png`;
    // middleEl.append(img);
    middleEl.style.backgroundImage = `url(./assets/${id}-middle.png)`;
    // update the stats to show the new count
    // reportEl.textContent = `You changed the middle ${middleCount} times`;
    displayStats();
});


bottomDropdown.addEventListener('change', () => {
    // get the value of the bottom dropdown
    const id = bottomDropdown.value;
    // increment the bottom change count state
    bottomCount++;
    // update the dom for the bottom
    // let img = document.createElement('img');
    // img.src = `./assets/${id}-pants.png`;
    // bottomEl.append(img);
    bottomEl.style.backgroundImage = `url(./assets/${id}-pants.png)`;
    // update the stats to show the new count
    // countEl.textContent = `You changed the pants ${bottomCount} times`;
    displayStats();
});

catchphraseButton.addEventListener('click', () => {
    // get the value of the catchphrase input
    const newCatchphrase = catchphraseInput.value;

    // push the new catchphrase to the catchphrase array in state
    catchphrases.push(newCatchphrase);
    // update the dom for the bottom
    // clear out the form input's value so it's empty to the user
    catchphraseInput.value = '';
    // update the dom to show the new catchphrases (call a function to do this work)
    // for (let phrase of catchphrases) {
    //     const p = document.createElement('p');
    //     p.textContent = phrase;
    //     catchphrasesEl.append(p);
    displayCatchphrases();
    

});

function displayStats() {
    // change the text contentof the reportEl to tell the user how many times they've changed each piece of the state
    const statsString = makeStatsString(); // call this function with the correct arguments
    reportEl.textContent = `You changed the head ${headCount} times, the middle ${middleCount} times and the bottom ${bottomCount} times.`;  
}

function displayCatchphrases() {
    // clear out the DOM for the currently displayed catchphrases
    catchphrasesEl.textContent = '';
    // loop through each catchphrase in state

    for (let phrase of catchphrases) {
        const p = document.createElement('p');
        p.textContent = phrase;
        catchphrasesEl.append(p);
    // and for each catchphrase
    // create an HTML element with the catchphrase as its text content
    // and append that HTML element to the cleared-out DOM
    }
}
