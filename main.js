const cardName = document.querySelector("[data-cardname]");

const cardDate = document.querySelector("[data-carddate]");

const cardNameInput = document.querySelector("[data-cardnameInput]");

const cardInput = document.querySelectorAll("[data-cardinput]");

const cardNumber = document.querySelectorAll("[data-cardnumber]");
const numberInput = document.querySelector("[data-cardnumberInput]")

const inputMonth = document.querySelector("[data-monthinput]")
const month = document.querySelector("[data-month]")

const inputYear = document.querySelector("[data-yearinput]")
const year = document.querySelector("[data-year]")

const cvcInput = document.querySelector("[data-cvcinput]")
const cvc = document.querySelector("[data-cvc]")

const errorBorder = document.querySelector("[data-inputsborder]")

const submitButton = document.querySelector("[data-submitbt]")

const numberBorder = document.querySelector("[data-cardnumberBorder]")


cardNameInput.addEventListener("input", ()=> {
  cardName.innerHTML = cardNameInput.value
});



inputMonth.addEventListener("input", ()=> {
    month.innerHTML = inputMonth.value
    if (12 <= inputMonth.value || inputMonth.value.length == 3) {
      inputMonth.value = 12
      month.innerHTML = 12
    }
    
})






inputYear.addEventListener("input", ()=> {
    year.innerHTML = inputYear.value
    if (100 <= inputYear.value || inputYear.value.length == 3) {
      inputYear.value = 23
      year.innerHTML = 23
    }
 
})

cvcInput.addEventListener("input", ()=> {
  cvc.innerHTML = cvcInput.value
  if (1000 <= cvcInput.value || cvcInput.value.length == 4) {
    cvcInput.value = ""
    cvc.innerHTML = ""
  }
})

for (i = 0; i <= cardNumber.length - 1; i++) {
  cardInput.forEach((input) => {
    input.addEventListener("input", () => {
      for (i = 0; i <= cardInput.length - 1; i++) {
        
        cardNumber[i].innerHTML = cardInput[i].value ;
        
        if ( cardInput[0].value.length == 4 ) {
          
          cardInput[1].focus()
          
        }
        if ( cardInput[1].value.length == 4) {
          cardInput[2].focus()
        }
        if ( cardInput[2].value.length == 4) {
          cardInput[3].focus()
        }
     
      
        
      }
  });
   
  });
}


function validation() {
  cardInput.forEach((input) => {
    if (!/^\d+$/.test(input.value)) {
      numberBorder.classList.add("error");
      return false;
    }
    
  });

  if (
  
    cardInput[0].value === "" ||
  cardInput[1].value === "" ||
  cardInput[2].value === "" ||
  cardInput[3].value === "" ||
  cvcInput.value === "" ||
  inputYear.value === "" ||
  inputMonth.value === "" ||
   cardNameInput.value === "") {
    alert("Please, fill in all fields correctly.");
    cvcInput.classList.add("blank")
    inputMonth.classList.add("blank")
    inputYear.classList.add("blank")
    cardNameInput.classList.add("blank")
    return false;
  }

  else {

  alert("Submitting.");
  window.location.href = "./Valpag.html"
  return true;}
}


submitButton.addEventListener("click", ()=> {
  validation()
}) 

