var list = document.getElementById("dd");
var ul = document.getElementById("vnb");
let h1 = document.querySelector("h1")
let nw = document.getElementById("ab")
let hidsection = document.getElementById("hidden-section")
let div = document.querySelector(".hidden")
let games = document.querySelectorAll(".game")
let navigation = document.querySelector("nav")
let btn = document.querySelector("button")
let hide = document.querySelectorAll(".hidden")
let p = document.querySelector(".p")


h1.addEventListener("mouseover", function(){
    hidsection.style.display= "block"
})

h1.addEventListener("mouseout", function(){
    hidsection.style.display= "none" 
})


h1.addEventListener("click", function(){
    for(let i = 0 ; i < games.length; i++){
        games[i].classList.remove("disrev")
        games[i].classList.add("dis")
    }
    navigation.classList.remove("disrev")
    navigation.classList.add("dis")
    div.classList.remove("apprev")
    btn.classList.remove("bbtnrev")
    div.style.display = "block"
    btn.style.display = "block"
    div.classList.add("app")
    btn.classList.add("bbtn")
    
})

btn.addEventListener("click", function(){
    for(let i = 0 ; i < games.length; i++){
        games[i].classList.remove("dis")
        games[i].classList.add("disrev")
    }
    navigation.classList.remove("dis")
    navigation.classList.add("disrev")
    div.classList.remove("app")
    btn.classList.remove("bbtn")
    div.classList.add("apprev")
    btn.classList.add("bbtnrev")
})


list.addEventListener("click", function(){

    if (ul.style.display == "block"){
        ul.style.display = "none"
    }
    else {
        ul.style.display = "block"
    }
})

document.addEventListener("click", function (event) {
    if (event.target != list) {
        ul.style.display = "none";
    }
})

