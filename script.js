const checkButton = document.getElementById('check-btn');
const input = document.getElementById('user-input');
const result = document.getElementById('results-div');
const clearBtn = document.getElementById('clear-btn');

checkButton.addEventListener('click', () => {

if (input.value === "") {

   alert('Please provide a phone number');

} else {

    telephoneCheck(input.value);
  
    
    }

    function telephoneCheck(str) {
        if (str.indexOf(")") < str.indexOf("(") || str.indexOf(")") > 0 && str.indexOf("(") < 0 || str.indexOf("(") == 0 && str.indexOf(")") == str.length-1) {
          result.innerText = `Invalid US number: ${input.value}`;
          
          return
        }
        let r = str.replace(/\s+|-|[()]|/g, "");
        if (r.length > 11 || str.indexOf("-") === 0) {
            result.innerText = `Invalid US number: ${input.value}`;
        }
        else if (r.length === 11) {
          if (r[0] === "1") {
            result.innerText = `Valid US number: ${input.value}`;
          }
          else {
            result.innerText = `Invalid US number: ${input.value}`;
          }
        }
        else if (r.length === 10 && str.indexOf(" ") === 2) {
          result.innerText = `Invalid US number: ${input.value}`;
        }
        else if (r.length === 10) {
          result.innerText = `Valid US number: ${input.value}`;
        }
        else if (r.length <= 8) {
          result.innerText = `Invalid US number: ${input.value}`;
        }
        
      }

});
clearBtn.addEventListener('click', () => {
  result.innerText = "";
});