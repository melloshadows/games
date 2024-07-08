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
let loadingPage = document.querySelector("#loading")
let loadingBarFill = document.querySelector("#loadingBarFill")
let loadingRatio = document.querySelector("#loadingRatio")

let images = ["imgs/bak.png","imgs/c77.png","imgs/gow.png","imgs/res2.png","imgs/res3.png","imgs/inj2.png","imgs/spm.png","imgs/spmm.png","imgs/res7.png","imgs/res8.png","imgs/res4.png","imgs/bioshock.png","imgs/tf2.png","imgs/doom.png","imgs/elden.png","imgs/download.jpg","imgs/bakgif.gif","imgs/nc.jpg","imgs/c77gif.gif","imgs/gowbi.jpg","imgs/gowgif2.gif","imgs/psbg4.jpg","imgs/res2gif2.gif","imgs/resbg5.png","imgs/res3gif3.gif","imgs/inj2bg2.jpg","imgs/inj2gif1.gif","imgs/spmbg.webp","imgs/spmgif3.gif","imgs/spmmbg2.jpg","imgs/spmmgif.gif","imgs/res7bg.webp","imgs/res7gif2.gif","imgs/res8bg.jpg","imgs/res8gif.gif","imgs/res4bg.jpg","imgs/res4gif.gif","imgs/biobg.jpg","imgs/biogif.gif","imgs/tf2bg.jpg","imgs/tfgif.gif","imgs/doombg.jpg","imgs/doomgif.gif","imgs/eldenbg.jpg","imgs/eldengif.gif"]

function preload(callback){
    let loadedimages = 0
    let totalimages = images.length 

    function updateLoadingBar() {
        let loadingPercentage = loadedimages / totalimages * 100;
        loadingBarFill.style.width = `${loadingPercentage}%`;
        loadingRatio.textContent = `${loadingPercentage.toFixed(0)}%`;
    }

    function canPlayFiles() {
        if (loadedimages === images.length)
            callback();
    }
    images.forEach(url => {
        let img = new Image();
        img.onload = () => {
            loadedimages++;
            updateLoadingBar();
            canPlayFiles();
        };
        img.onerror = () => {
            console.error(`Error loading image: ${url}`);
        };
        img.src = url;
    });
}

preload(() => {
    loadingPage.style.display = "none" 
})
    
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