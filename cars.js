function show() {

    var person = document.getElementById("nameInput").value ; 
    
    document.getElementById("content").innerHTML =
    `
    <h3>Hello <span class="person"></span> ${person}! Thanks for visiting us </h3>`; 
}