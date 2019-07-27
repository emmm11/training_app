
// Progress variables
var doneCount = 0;
var totalCount = 14; // update to total number of days
var progressBar = document.getElementById("progressBar");

// pulling 'done' days out of local storage from last use
for(var j = 1; j < 15; j++) {
    button = document.getElementById('day-' + j);
    button.style.backgroundColor = localStorage.getItem('colorButton-' + j);
    if(button.style.backgroundColor == 'pink') {
        doneCount += 1;
    }
    progress();
}
// Progress stuff *to-do* update on click!
function progress() {
    progressBar.innerHTML = Math.round((doneCount/totalCount) * 100) + "% complete!";
}

// changing the day colour when clicked for 'done'
function complete(btn, event, color) {
    if (btn.style.backgroundColor == "pink") {
        btn.style.backgroundColor = "white";
        doneCount -= 1;

    }
    else {
        btn.style.backgroundColor = "pink"
        doneCount += 1;

    }
    // Updating local storage after colours are changed
    // this could be more efficient, shouldn't loop through them all for just one click
    for(var k = 1; k < 15; k++) {
        button = document.getElementById('day-' + k);
        localStorage.setItem('colorButton-' + k, button.style.backgroundColor);
    }
    progress();
}



