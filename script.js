
// working on saving the colours in local storage 
// and retreiving so that all data is kept
background = localStorage.backgroundColor;
document.style
function complete(btn, event, color) {
    if (btn.style.backgroundColor == "pink") {
        btn.style.backgroundColor = "white"
    }
    else {
        btn.style.backgroundColor = "pink"
    }
    localStorage.setItem('backgroundColor', color);

}

