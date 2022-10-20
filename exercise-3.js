const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25,
  address: {
    state: 'Italy',
    region: 'Lazio',
    city: 'Rome'
  }
};

// Argh! Nonostante abbia utilizzato Object.assign(), modificando la proprietà "address",
// viene modificato il riferimento all'oggetto person1
// const person2 = Object.assign({}, person1);

let person2 = JSON.parse(JSON.stringify(person1));


person2.address.region = 'Lombardia';
person2.address.city = 'Milan';

 console.log("PERSONA 1", person1);
 console.log("PERSONA 2", person2);