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

//fetchPerson By id
let fetchPersonById = async(id) => {

  return new Promise((resolve, reject) => {

   setTimeout(() => {
    const person = persons.filter((item) => {
      if (item.id === id) {
        resolve(`Lavoratore: ${item.firstName}, ${item.lastName}`)
      }
    })
      reject(new Error(`Nessun lavoratore corrispondente all'id: ${id}`))
   }, 2000)
  })
}



// fetch job by id
let fetchJobById = async(id) => {

 return new Promise((resolve, reject) => {
  setTimeout(() => {

   const job = jobs.filter((item) => {
    if (item.id === id) {
      resolve(`Mansione: ${item.jobTitle}`)
    }
   })
   reject(new Error(`nessun lavoratore corrispondente all'id: ${id}`))
  }, 2000)
 })
}



Promise.all([fetchPersonById(2), fetchJobById(4)])

.then((worker) => console.log(worker))
.catch((e) => console.log(e.message))









