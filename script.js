// *to-do* create all the day tiles (but what about filling them in with data? Can I match them up looping through and concatenating?)

// Progress variables
var doneCount = 0;
var totalCount = 7; // update to total number of days

// pulling 'done' days out of local storage from last use
for(var j = 1; j < 8; j++) {
    button = document.getElementById('day-' + j);
    button.style.backgroundColor = localStorage.getItem('colorButton-' + j);
    if(button.style.backgroundColor == 'pink') {
        doneCount += 1;
    }
}
// Progress stuff *to-do* update on click!
var progressBar = document.getElementById("progressBar");
progressBar.innerHTML = Math.round((doneCount/totalCount) * 100) + "% complete!";

// changing the day colour when clicked for 'done'
function complete(btn, event, color) {
    if (btn.style.backgroundColor == "pink") {
        btn.style.backgroundColor = "white";

    }
    else {
        btn.style.backgroundColor = "pink"

    }
    // Updating local storage after colours are changed
    // this could be more efficient, shouldn't loop through them all for just one click
    for(var k = 1; k < 8; k++) {
        button = document.getElementById('day-' + k);
        localStorage.setItem('colorButton-' + k, button.style.backgroundColor);
    }
}



