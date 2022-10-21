function calculateAverageAge(persons) {
  let result = 0;
  persons.forEach(element => {
    let ages = element.age
     result = result + ages / persons.length
  });
  return `L'età media del gruppo è: ${Math.round(result)} anni!`;
  //Per approssimare all'intero più vicino
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(average);