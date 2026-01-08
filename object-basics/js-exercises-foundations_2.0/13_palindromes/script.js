const string = `A car, a man, a maraca.`;

const isPalindrome = function (string) {
  let palindrome = [];
  const splitString = string.split(``);

  const splitStringPure = splitString.filter((char) => {
    if (char === `,` || char === ` ` || char === `.`) {
      return false;
    } else {
      return true;
    }
  });
  const pureString = splitStringPure.join(``);

  splitStringPure.map((char) => palindrome.unshift(char));
  palindrome = palindrome.join(``);

  //   console.log(pureString);
  //   console.log(palindrome);

  if (pureString.toLowerCase() === palindrome.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(string));
