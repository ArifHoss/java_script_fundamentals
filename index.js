const bankBalanceElement = document.getElementById("bankBalance");
const loanElement = document.getElementById("loan");
const paySalaryElement = document.getElementById("pay");
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
let loanBalance = [];
let bankBalance = [];
let laptopPrice = [];

fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then(response => response.json())
  .then(data => laptops = data)
  .then(laptops => addLaptopsToMenu(laptops));

const addLaptopsToMenu = (laptops) => {
  laptops.forEach(x => addLaptopToMenu(x));
}


const addLaptopToMenu= (laptop) =>{
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));

  laptopsElement.appendChild(laptopElement);
}

const handleLaptopMenuChange = e =>{
  const selectedLaptop = laptops[e.target.selectedIndex];
  laptopPriceElement.innerText = selectedLaptop.price +" SEK";
  imageElement.src = `https://hickory-quilled-actress.glitch.me/${selectedLaptop.image}`
  selectedLaptopElement.innerText = selectedLaptop.title
  laptopDetailsElement.innerText = selectedLaptop.description;
  specsElement.innerText = selectedLaptop.specs.join("\n ");

}

const handleSalary = () => {
  let paySalary = paySalaryElement.innerText;
  let currentSalary = parseInt(paySalary);
  paySalaryElement.innerText =  currentSalary + 100;
}

const handleBankBalance = () =>{
  let loanBalance = parseInt(bankBalanceElement.innerText);
  let paySalaryBalance = parseInt(paySalaryElement.innerText);


  bankBalanceElement.innerText = loanBalance + paySalaryBalance;
  paySalaryElement.innerText = 0;

  console.log(bankBalanceElement);

}

laptopsElement.addEventListener("change", handleLaptopMenuChange);
workElement.addEventListener("click", handleSalary);
bankElement.addEventListener("click", handleBankBalance);
