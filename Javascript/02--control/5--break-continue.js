// break
for (let i = 0; i < 50; i++) {
    if (i === 2) {
      break; // break the loop
    }
    console.log(i); // 0 1
  }
  
  // continue
  for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // skip the current iteration
    }
    console.log(i); // 0,1,3,4
  }
  