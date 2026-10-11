const myImage = document.querySelector("img");

myImage.onclick = function(){
    var mySrc = myImage.getAttribute("src");
    if (mySrc === "image/tatoo-logo.png"){
        myImage.setAttribute("src", "image/tatoo-logo2.png")
    }   else{
        myImage.setAttribute("src", "image/tatoo-logo.png")
    }
}

const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

function setUserName(){
    var myName = prompt("Please, enter you name.");
    if (!myName){
    return;
    }localStorage.setItem("name", myName);
    myHeading.textContent = "Tatoo Saloon is please for you, " +myName;
}

localStorage.setItem("names", JSON.stringify(["name1, name2"]));
let names = JSON.parse(localStorage.StorageA("names"));

if (!localStorage.getItem("name")){
    setUserName();
}   else {
    var storedName = localStorafe.getItem("name");
    myHeading.textContent = "Tatoo saloon is please for yoy, " + storedName;
}

myButton.onClick = function(){
    setUserName();
};
