const fibonacci = function (member) {
  if (member < 1) {
    return 1;
  }
  let previous = 0;
  let current = 1;
  for (let i = 1; i < member; i++) {
    const next = previous + current;
    previous = current;
    current = next;
  }
  return current;
};
console.log(fibonacci(6));

// Do not edit below this line
// module.exports = fibonacci;
