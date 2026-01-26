const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (peopleArr) {
  const currentYear = new Date().getFullYear();
  const oldestPerson = peopleArr.reduce((acc, curr) => {
    if (
      (curr.yearOfDeath || currentYear) - curr.yearOfBirth >
      (acc.yearOfDeath || currentYear) - acc.yearOfBirth
    ) {
      acc = curr;
    }

    return acc;
  }, peopleArr[0]);
  return oldestPerson;
};

console.log(findTheOldest(people));

console.log(people);

// // Do not edit below this line
// module.exports = findTheOldest;
// let currAge;
// let accAge;

// if (!curr.yearOfDeath) {
//   currAge = new Date().getFullYear() - curr.yearOfBirth;
// } else {
//   currAge = curr.yearOfDeath - curr.yearOfBirth;
// }

// if (!acc.yearOfDeath) {
//   accAge = new Date().getFullYear() - acc.yearOfBirth;
// } else {
//   accAge = acc.yearOfDeath - acc.yearOfBirth;
// }
