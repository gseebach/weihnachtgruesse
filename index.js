
// const santa=document.getElementById("schlitten");

//$("#schlitten").animate({transform: "200px"},3000);
//document.querySelector(".titel").classList.add("farbe");
// Extrahiert aus dem Querystring einzelne Parameter
var adressat;
const urlParams = new URLSearchParams(window.location.search);
// Liest mit .get() die Werte der Parameter aus
const sender = urlParams.get('origin');
adressat=sender;
if (sender=="f868e6899b22fb69ec5bcee32e15f5cf"){adressat="Altmüllers"} 
else if (sender=="3a64b61efc7eb5180e20081d286888bc") {adressat="Sätteles"}
else if (sender=="e74c9e17a2454b2bf0867a530a3bec7f") {adressat="Gündischs"}
else if (sender=="3617320d5d1abe3eb63e2502b579bcb0") {adressat="Seidls"}
else if (sender=="8a5a0eae251267eb349bf9db3e09712d") {adressat="Familie"}
else {adressat="Freunde"}
document.querySelector("#adressat").innerHTML="liebe "+ adressat;
$(document).ready(function(){
  $("#schlitten").animate({right: "2000px", top: "20vh", width: "300px", height: "200px"},{duration: 5000, iterations: 1});
});








    










 

