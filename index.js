let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let firstNumber = "";
let operator = "";
let secondNumber = "";
let resultShown = "false"

for(i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(){
    handler(this.innerHTML)
  });
}

document.addEventListener("keydown", function(event){
  if ("0123456789".includes(event.key) || event.key === "Enter" || event.key === "Backspace" || event.key === "Delete" || event.key === "+" || event.key === "-" || event.key === "*" || event.key === "/" || event.key === "%" || event.key === ""){
       handler(event.key)
    }
    else {
      //do nothing
    }
});

function handler(key){
   input.focus();
  if(key === "+" || key === "-" || key === "/" || key === "*"){
      firstNumber = input.value;
      operator = key;
      input.value = "";
    }

    else if(key === "=" || key === "Enter"){
      secondNumber = input.value;
      switch (operator) {
        case "+":
         input.value = Number(firstNumber) + Number(secondNumber);
          break;

          case "-":
          input.value = Number(firstNumber) - Number(secondNumber);
          break;

          case "*":
          input.value =  Number(firstNumber) * Number(secondNumber);
          break;

          case "/":
            if (secondNumber === "0"){
            input.value = "Error";
          }
          else{
          input.value = Number(firstNumber) / Number(secondNumber);
          }
          break;

        default:
          break;
      }
      resultShown = true;
    }
    else if (key === "%"){
        input.value = input.value / 100;
        resultShown = true;
    }
    else if (key === "C" || key === "Delete"){
        input.value = "";
    }

    else if (key === "x" || key === "Backspace"){
        input.value = input.value.slice(0,input.value.length-1);
    }

    else if (key === (".")){
       if(input.value.includes(".")){
      input.value = input.value;
    }
    else if (input.value === ""){
      input.value = "0" + ".";
    }
    else{
      input.value = input.value + ".";
    }
  }
    else{
      if(resultShown === true){
        input.value = key;
        resultShown = false;
      }
      else{
      input.value = input.value + key;
      }
    }
}