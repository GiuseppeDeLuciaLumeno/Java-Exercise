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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];

let fetchPersonById = async(id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find(item => item.id === id)
      if (person) {
        resolve(person)
      }
      reject(new Error(`Nessuna persona con id: ${id}`))
    }, 1000)
  })
}

let fetchJobById = async(id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find(item => item.id === id)
      if (job) {
        resolve(job)
      }
      reject(new Error(`Nessun lavoratore con id: ${id}`))
    }, 500)
  })
}



Promise.any([fetchPersonById(0), fetchJobById(0)])
.then((worker) => console.log(worker))
.catch((e) => console.log(e))