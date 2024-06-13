var list_dicee = ["./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"];
var random_number_1 = Math.floor(Math.random()*6);
var random_number_2 = Math.floor(Math.random()*6);
var pict_1 = document.querySelector(".img1");
var pict_2 = document.querySelector(".img2");
pict_1.setAttribute("src",list_dicee[random_number_1]);
pict_2.setAttribute("src",list_dicee[random_number_2]);
if(random_number_1>random_number_2){
    document.querySelector("h1").innerHTML="🚩First player wins";
    document.querySelector("h1").style.fontSize="100 px";
}
if(random_number_2>random_number_1){
    document.querySelector("h1").innerHTML="Second player wins🚩";
}   document.querySelector("h1").style.fontSize="100px";
if(random_number_1==random_number_2){
    document.querySelector("h1").innerHTML="🚩Draw🚩";
    document.querySelector("h1").style.fontSize="100 px";
}
