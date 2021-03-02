// A.1 
// let A1 = [ 0, 2 , "a"];
// let A2 = ["b", 0, 3];
// for (let i = 0; i < A1.length; i++) {
//   for (let j = 0; j < A2.length; j++) {
//     if (A1[i] === A2[j]) {
//       A1.splice(i, 1);
//       A2.splice(j, 1);
//     }
//   }
// }
// console.log(A1.concat(A2));

// A2 

team([
    {
      name: "Arsenal",
      points: 99,
      GD: 45,
    },
    {
      name: "Chelsea",
      points: 75,
      GD: 39,
    },
    {
      name: "Manchester United",
      points: 60,
      GD: 29,
    },
    {
      name: "Liverpool",
      points: 88,
      GD: 43,
    },
  ]);
  function team(list) {
    list.sort((a, b) => {
      return a.GD - b.GD;
    });
    list.sort((a, b) => {
      return b.points - a.points;
    });
    for (let i=0; i<list.length; i++) {
      list[i].position = i+1;
    }
    console.log(list);
  }