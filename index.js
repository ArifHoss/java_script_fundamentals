const bankBalanceElement = document.getElementById("bankBalance");
const loanElement = document.getElementById("loan");
const payLoanElement = document.getElementById("payLoan");
const paySalaryElement = document.getElementById("pay");
const loanLeftElement = document.getElementById("loanLeft");
const bankElement = document.getElementById("bank");
const workElement = document.getElementById("work");
const laptopsElement = document.getElementById("laptops");
const specsElement = document.getElementById("specs");
const selectedLaptopElement = document.getElementById("selectedLaptop");
const laptopDetailsElement = document.getElementById("laptopDetails");
const laptopPriceElement = document.getElementById("laptopPrice");
const buyNowElement = document.getElementById("buyNow");
const imageElement = document.getElementById("image");
const loanDivElement = document.getElementById("loanDiv");


let laptops = [];
let hasLoan = false;



fetch("https://hickory-quilled-actress.glitch.me/computers")
  .then(response => response.json())
  .then(data => laptops = data)
  .then(laptops => addLaptopsToMenu(laptops));

const addLaptopsToMenu = (laptops) => {
  laptops.forEach(x => addLaptopToMenu(x));

  updateComputerInfo(laptops[0]);
}


const addLaptopToMenu = (laptop) => {
  const laptopElement = document.createElement("option");
  laptopElement.value = laptop.id;
  laptopElement.appendChild(document.createTextNode(laptop.title));

  laptopsElement.appendChild(laptopElement);


}

function updateComputerInfo(selectedLaptop) {
  laptopPriceElement.innerText = selectedLaptop.price + " SEK";
  imageElement.src = `https://hickory-quilled-actress.glitch.me/${selectedLaptop.image}`
  selectedLaptopElement.innerText = selectedLaptop.title
  laptopDetailsElement.innerText = selectedLaptop.description;
  specsElement.innerText = selectedLaptop.specs.join("\n ");
}

const handleLaptopMenuChange = e => {
  const selectedLaptop = laptops[e.target.selectedIndex];

  updateComputerInfo(selectedLaptop);

}

const handleSalary = () => {
  let paySalary = paySalaryElement.innerText;
  let currentSalary = parseInt(paySalary);
  paySalaryElement.innerText = currentSalary + 100;
}

const handleBankBalance = () => {
  let bankBalance = parseInt(bankBalanceElement.innerText);
  let paySalaryBalance = parseInt(paySalaryElement.innerText);


  bankBalanceElement.innerText = bankBalance + paySalaryBalance;
  paySalaryElement.innerText = 0;


}

const handleLaptopPurchase = () => {
  let laptopPrice = parseInt(laptopPriceElement.innerText);
  let bankBalance = parseInt(bankBalanceElement.innerText);

  if (laptopPrice > bankBalance) {
    alert(`Sorry you dont have enough balance! Work and earn some money first!`)
  }
  if (laptopPrice <= bankBalance) {
    bankBalanceElement.innerText = bankBalance - laptopPrice;
    alert(`Congratulations! Your just bought' ${selectedLaptopElement.innerText}' laptop.`)
  }


}

const handleGetLoan = () => {
  const currentBalance = parseInt(bankBalanceElement.innerText);
  const loanLeft = parseInt(loanLeftElement.innerText);


  if (!hasLoan) {

    const loanAmount = parseInt(prompt("Please enter the amount you want to borrow."));

    if (currentBalance === 0 || loanAmount > (currentBalance * 2)) {
      alert(`You don't have enough credit to get a loan Or you already has a loan!`)
    }
    if (loanAmount === currentBalance || loanAmount <= (currentBalance * 2)) {
      bankBalanceElement.innerText = currentBalance + loanAmount;
      loanLeftElement.innerText = loanLeft + loanAmount;
      hasLoan === true;
    }

  } else {
    alert(`Oooooops! You already has a loan!`)
  }

}

const handleLoanChange = () => {
  if (parseInt(loanLeftElement.innerText) > 0) {
    hasLoan = true;
    loanDivElement.style.display = "inline";
  } else {
    loanDivElement.style.display = "none";
    hasLoan = false;
  }

}

const handlePayLoanButton = () => {
  let loanLeft = parseInt(loanLeftElement.innerText);
  let paySalaryAmount = parseInt(paySalaryElement.innerText);

  if (hasLoan === false) {
    alert(`You don't have any loan.`);

  } else if (paySalaryAmount === 0) {
    alert(`You have to work and earn to pay your loan.`);

  } else if (hasLoan === true || paySalaryAmount >= loanLeft) {
    paySalaryElement.innerText = paySalaryAmount - loanLeft;
    handleBankBalance();
    loanLeftElement.innerText = 0;
  }

}

loanLeftElement.addEventListener("DOMSubtreeModified", handleLoanChange)
laptopsElement.addEventListener("change", handleLaptopMenuChange);
workElement.addEventListener("click", handleSalary);
bankElement.addEventListener("click", handleBankBalance);
buyNowElement.addEventListener("click", handleLaptopPurchase);
loanElement.addEventListener("click", handleGetLoan);
payLoanElement.addEventListener("click", handlePayLoanButton);
