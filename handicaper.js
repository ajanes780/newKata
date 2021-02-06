function openOrSenior(data) {
  let handiCap = 7;
  let seniorLvl = 55;

  let answerKey = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i][0]);
    if (data[i][0] >= seniorLvl && data[i][1] > handiCap) {
      answerKey.push("Senior");
    } else {
      answerKey.push("Open");
    } // everyone else is Jr
  }
  return answerKey;
}
