function sum(...num) {
    let score = 0;
    num.forEach(item => {
      score += item
    })
    return score
  }

  console.log(sum(1, 2, 3, 4, 5,));
