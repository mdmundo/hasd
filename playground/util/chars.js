// \u00b4

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    for (let k = 0; k < 16; k++) {
      for (let l = 0; l < 16; l++) {
        console.log(
          `${`\\u${i.toString(16)}${j.toString(16)}${k.toString(
            16
          )}${l.toString(16)}`}`
        );
      }
    }
  }
}
