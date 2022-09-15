function canPlay() {
  const personName = 'Paul';

  if (true) {
    personName = 'George';
  }

  personName += ' plays football';

  console.log(typeof personName, personName);
}

canPlay();


//replaced let personName = "Paul"   --> const personName = "Paul"