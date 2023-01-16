const loanBalanceElement = document.getElementById("loanBalance");
const loanElement = document.getElementById("loan");
const payLoanElement = document.getElementById("pay");
const bankElement = document.getElementById("bank");
const workElement = document.getElementById("work");
const laptopsElement = document.getElementById("laptops");
const cartElement = document.getElementById("cart");
const selectedLaptopElement = document.getElementById("selectedLaptop");
const laptopDetailsElement = document.getElementById("laptopDetails");
const laptopPriceElement = document.getElementById("laptopPrice");
const buyNowElement = document.getElementById("buyNow");


let laptops = [];
let cart = [];
let loanBalance = [];
let bankBalance = [];
let laptopPrice = [];

fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then(response => response.json())
  .then(data => laptops = data)
  .then(laptops => addLaptopsToMenu(laptops));

const addLaptopsToMenu = (laptops) => {
  laptops.forEach(x => addLaptopToMenu(x));
  laptopPriceElement.innerText = laptops[0].price;
}


const addLaptopToMenu= (laptop) =>{
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.description));
  laptopsElement.appendChild(laptopElement);
}

const handleLaptopMenuChange = e =>{
  const selectedLaptop = laptops[e.target.selectedIndex];
  laptopPriceElement.innerText = selectedLaptop.price;
}


laptopsElement.addEventListener("change", handleLaptopMenuChange);
