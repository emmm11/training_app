
// working on saving the colours in local storage 
// and retreiving so that all data is kept

button = document.getElementById("dayOne");
button.style.backgroundColor = localStorage.getItem('buttonColor');

function complete () {

    if(button.style.backgroundColor == "pink") {
        button.style.backgroundColor = "white"
        localStorage.setItem('buttonColor', 'white')
    }

    else {
        button.style.backgroundColor = "pink"
        localStorage.setItem('buttonColor', 'pink')
    }
}




//function complete(btn, event, color) {
  //  if (btn.style.backgroundColor == "pink") {
    //    btn.style.backgroundColor = "white"
      //  localStorage.setItem(btn.style.backgroundColor, 'white')
    //}
    //else {
      //  btn.style.backgroundColor = "pink"
        //localStorage.setItem(btn.style.backgroundColor, 'pink')
    //}

//}

