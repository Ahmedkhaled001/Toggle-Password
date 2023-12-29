
var passInput = document.querySelector("#passinput")
var myButton = document.querySelector("#btn")

myButton.onclick = function() {
    if( myButton.getAttribute('data-text') == 'show') {
        passInput.setAttribute('type', 'text')
        myButton.setAttribute('data-text', 'hide')
        myButton.innerHTML = "Hide"
    }

    else{
        passInput.setAttribute("type", "password")
        myButton.setAttribute("data-text", "show")
        myButton.innerHTML = "Show"
    } 
}

// quaryselector => get any class or id from html
// name of var.getAttribute => get any attribute from html
// name of var.setAttribute => change anything from to
// name of var.innerhtml => to change anything from html

///////////////////////////////////////////////////////////////////
//other way

/* myButton.addEventListner = ("click", togglePassword)

function togglePassword() {
    if( myButton.getAttribute('data-text') == 'show') {
        passInput.setAttribute('type', 'text')
        myButton.setAttribute('data-text', 'hide')
        myButton.innerHTML = "Hide"
    }

    else{
        passInput.setAttribute("type", "password")
        myButton.setAttribute("data-text", "show")
        myButton.innerHTML = "Show"
    } 
}
///////////////////////////////////////////////////////////////////

*/