function getKeys(obj) {

  let list = [];

  for (const key in person) {
      list.push(key);
  }
  return list
}

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 32,
  city: 'Rome',
  job: 'Developer',
};

const keys = getKeys(person);
console.log(keys);


