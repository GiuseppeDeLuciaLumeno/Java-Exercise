const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

for (const key of Object.keys(person)) {
  const values = person[key];
  console.log(key, values);
}





