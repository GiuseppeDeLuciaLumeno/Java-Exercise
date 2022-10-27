const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
       if (id) {
      resolve(id);
    } else {
      reject(new Error("Non hai inserito Nessun ID"))
    }
    },3000)
  })
}

let callPerson = fetchPersonById(2);

callPerson
.then((id) => {
  return console.log(persons.filter(item => item.id === id));
})