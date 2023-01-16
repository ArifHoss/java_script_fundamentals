const loanBalanceElement = document.getElementById("loanBalance");
const loanElement = document.getElementById("loan");
const payLoanElement = document.getElementById("pay");
const bankElement = document.getElementById("bank");
const workElement = document.getElementById("work");
const laptopsElement = document.getElementById("laptops");
const specsElement = document.getElementById("specs");
const selectedLaptopElement = document.getElementById("selectedLaptop");
const laptopDetailsElement = document.getElementById("laptopDetails");
const laptopPriceElement = document.getElementById("laptopPrice");
const buyNowElement = document.getElementById("buyNow");
const imageElement = document.getElementById("image");


let laptops = [];
// let specs = [];
let loanBalance = [];
let bankBalance = [];
let laptopPrice = [];

fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then(response => response.json())
  .then(data => laptops = data)
  .then(laptops => addLaptopsToMenu(laptops));

const addLaptopsToMenu = (laptops) => {
  laptops.forEach(x => addLaptopToMenu(x));
  // laptopPriceElement.innerText = laptops[0].price;
}


const addLaptopToMenu= (laptop) =>{
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));

  laptopsElement.appendChild(laptopElement);


  // laptopDetailsElement.appendChild(laptopElement);
}

const handleLaptopMenuChange = e =>{
  const selectedLaptop = laptops[e.target.selectedIndex];
  laptopPriceElement.innerText = selectedLaptop.price;
  imageElement.src = `https://hickory-quilled-actress.glitch.me/${selectedLaptop.image}`
  selectedLaptopElement.innerText = selectedLaptop.title
  laptopDetailsElement.innerText = selectedLaptop.description;
  specsElement.innerText = selectedLaptop.specs.join("\n ");


}


laptopsElement.addEventListener("change", handleLaptopMenuChange);
