const person1 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 25
};

const person2 = person1;

person2.firstName = "Simon"

// Assegnare un Object ad una variabili vuol dire creare una clonazione superficiale, quindi
// ogni modifica fatta al nuovo oggetto intaccherà il precedente.
// Se si desidera avere una copia indipendente si può usare Object.Assign o lo Spread Operator

 console.log(person1);
 console.log(person2);

