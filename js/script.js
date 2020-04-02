/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` is an array of objects containing a quote and informations about.
***/

const quotes = [
    {
        quote: "If the brain were so simple we could understand it, we would be so simple we couldn't.",
        source: "Emerson M. Pugh",
        citation: "The Biological Origin of Human Values",
        media:"book",
        year: 1977
    },
    {
        quote: "Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves.",
        source: "Albert Einstein"
    },
    {
        quote: "Ben, I want to say one word to you, just one word: plastics.",
        source: "Buck Henry and Calder Willingham",
        citation: "The Graduate",
        media: "movie",
    },
    {
        quote: "He made an instrument to know if the moon shine at full or no.",
        source: "Samuel Butler",
        citation: "Hudibras",
        media:"poem",
        year: 1664
    },
    {
        quote: "Measure what is measurable, and make measurable what is not so.",
        source: "Galileo"
    },
];

/**
 * Change the background color to a random one.
 */


function changeColor() {
    // colors from the Smooth Rock Color Palette from color-hex : https://www.color-hex.com/color-palette/4131
    const colors = ["#32ab9f", "#4b86b4", "#f96161", "#e0cda7", "#6b4423"];
    const index = Math.floor(Math.random()*colors.length);
    document.body.style.background = colors[index];
}

/**
 * Select a random quote from the array quotes.
 *
 * @returns {object} the object containing the quote and information about.
 */


function getRandomQuote() {
    const index = Math.floor(Math.random()*quotes.length);
    return quotes[index];
}

/**
 * Format a random quote and display this quote in the quote-box and change the background's color.
 */


function printQuote() {
    const theQuote = getRandomQuote();
    var htmlString = `<p class="quote">${theQuote.quote}</p>`;
    htmlString += `<p class="source">${theQuote.source}`;
    // does theQuote has a citation ?
    if ("citation" in theQuote) {
        htmlString += `<span class="citation">${theQuote.citation}</span>`;
        // does the Quote has a media ?
        if ("media" in theQuote) {
            htmlString += ` (${theQuote.media})`;
        }
    }
    // does theQuote has a year ?
    if ("year" in theQuote) {
        htmlString += `<span class="year">${theQuote.year}</span>`; 
    }
    // close the html part :
    htmlString += "</p>";
    // apply effects to the HTML page :
    changeColor()
    document.getElementById('quote-box').innerHTML = htmlString;
}

// Auto change the displayed quote :
var intervalID = window.setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
