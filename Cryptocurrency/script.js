// Api key: CG - HhbUi8uSb9PZHjsBc6mfrkbS

// https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd"

let bitcoin = document.getElementById("bitcoin");
let dogecoin = document.getElementById("dogecoin");
let ethereum = document.getElementById("ethereum");

// var setting = {
//     "async" : true,
//     "scrossDomain" : true,
//     "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
//     "method" : "GET",
//     "headers" : {}
// }

// $.ajax(setting).done(function (response) {
//     bitcoin.innerHTML = response.bitcoin.usd;
//     dogecoin.innerHTML = response.dogecoin.usd;
//     ethereum.innerHTML = response.ethereum.usd;
// })

const apiURL =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd";

//Using async & await

async function getCost(url) {
  let data = await fetch(url);
  let response = await data.json();
  bitcoin.innerHTML = response.bitcoin.usd;
  dogecoin.innerHTML = response.dogecoin.usd;
  ethereum.innerHTML = response.ethereum.usd;
}

getCost(apiURL);

let menuCard = document.querySelector("div");

let menu = Array.from(document.getElementsByClassName("menuButton"));
menu.forEach(function (menu) {
  menu.addEventListener("click", function () {
    menuCard.classList.toggle("hidden");
  });
});

let isDark = true;
let contain = document.querySelector(".container");

let dark = Array.from(document.getElementsByClassName("darkIcon"));
dark.forEach(function (dark) {
  dark.addEventListener("click", function () {
    if (isDark) {
      contain.style.background = `url("Images/light-bg.jpg")`;
      menuCard.style.background = `rgb(102, 13, 15)`;
    } else {
      contain.style.background = `url("Images/background.png")`;
      menuCard.style.background = `rgb(33, 13, 75)`;
    }
    isDark = !isDark;
  });
});
