function palindrome(str) {
  let newStr = str.split(/\W+|_/).join('').toLowerCase();
  let revStr = str.split(/\W+|_/).join('').split('').reverse().join('').toLowerCase()

  if (revStr === newStr){
    return true
  } else {return false}

  

  
}