// A.1 
let A1 = [ 0, 2 , "a"];
let A2 = ["b", 0, 3];
for (let i = 0; i < A1.length; i++) {
  for (let j = 0; j < A2.length; j++) {
    if (A1[i] === A2[j]) {
      A1.splice(i, 1);
      A2.splice(j, 1);
    }
  }
}
console.log(A1.concat(A2));
