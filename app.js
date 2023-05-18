let n = 1;
let check = false;
for (let i = 1; check == false; i++) {
  if (i % 2 === 1) {
    console.log(`${i} is odd`);
    if (n == 10) check = true;
    n++;
  }
}
