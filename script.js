const textInput = document.querySelector("#text-input");
const checkButton = document.querySelector("#check-btn");
const result = document.querySelector("#result");

const update = () => {
  if (textInput.value === "") {
    window.alert("Please input a value");
    return;
  }

  const strToCheck = textInput.value;
  console.log(strToCheck);
  const palindromeCheck = isPalindrome(strToCheck);
  console.log(palindromeCheck);
  const msg = 
    palindromeCheck ? 
    `${strToCheck} is a palindrome` : 
    `${strToCheck} is not a palindrome`;
  result.innerText = msg;
}

checkButton.onclick = update;

const isPalindrome = str => {
  let left = 0, right = str.length - 1;
  while (left < right) {
    let leftChar = str[left];
    let rightChar = str[right];

    while (left < right && !isAlphanumeric(leftChar)) {
      left++;
      leftChar = str[left];
    }

    while (left < right && !isAlphanumeric(rightChar)) {
      right--;
      rightChar = str[right];
    }

    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) return false;

    left++;
    right--;
  }
  return true;
}

const isAlphanumeric = str => {
  return /^[a-zA-Z0-9]$/.test(str);
}
