  function rot13(message) {
    // <-- Declare variables -->
    // <-- To solve this problem we have to do- -->
    // <-- Our problem is rot13cipher method function. rot13 cipher method basiccaly is shifting indexes of every letter in a sentence. -->
    // <-- First check then convert your input to array -->
    // <-- Declare all values that needed  -->
    // <-- Our first goal is having an array of alhabet in sorted way, for big and small letters. -->
    // <-- So we can shift indexes. -->
    // <-- And with the help of shiftedIndexesArray we can grap thoose -->
    // <-- Numbers and symbols output is undefined on result array, this is the last part of solving problem -->
    let bigString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let smallString = "abcdefghijklmnopqrstuvwxyz";
    let shiftedIndexArray = [];
    let shiftedMessageArray = [];
    let bigIndexes = [];
    let resultArray = [];
    let smallIndexes = [];
    let messageArray = [];
    let smallArray = [];
    let bigArray = [];
    let indexArr = [];
    let order = [];
    let result = "";
    let temp;
    let numbers = [];
    let nonNumbers = [];
    // <-- Convert variables
    for (let i = 0; i < bigString.length; i++) {
      bigArray.push(bigString[i]);
      smallArray.push(smallString[i]);
    }
    if (typeof message === "string") {
      // <-- Convert message to array
      for (let j = 0; j < message.length; j++) {
        messageArray.push(message[j]);
      }
    }
    // <-- ROT13 Cipher -->
    // <-- The method here is shiftin indexes 13 times and replacing the letter -->
    for (let k = 0; k < messageArray.length; k++) {
      // Capitalized?
      if (bigArray.includes(messageArray[k])) {
        // <--Getting indexes of letters and ciphered letters -->
        temp = bigArray.indexOf(messageArray[k]);
        indexArr.push(temp);
        bigIndexes.push(k);
        if (temp + 13 >= 26) {
          shiftedIndexArray.push((temp + 13) - 26);
        } else if (temp + 13 < 26) {
          shiftedIndexArray.push(temp + 13);
        }
        // Non-capitalized?
      } else if (smallArray.includes(messageArray[k])) {
        // <-- Getting indexes of letters and ciphered letters -->
        temp = smallArray.indexOf(messageArray[k]);
        // console.log(temp);
        indexArr.push(temp);
        smallIndexes.push(k);
        if (temp + 13 >= 26) {
          shiftedIndexArray.push((temp + 13) - 26);
        } else if (temp + 13 < 26) {
          shiftedIndexArray.push(temp + 13);
        }
        // Is it space?
      } else if (messageArray[k] === " ") {
        shiftedIndexArray.push(" ");
        // Is it non letter.
      } else if (
        !bigString.includes(messageArray[k]) &&
        !smallString.includes(messageArray[k])
      ) {
        let tempNonLetter = messageArray[k];
        shiftedIndexArray.push(tempNonLetter);
      }
    }
    // <-- We determine that from first letter to last letter is input capitalized or not here. I use true for capitalized letters and false for rest of the values. -->
    for (let q = 0; q < messageArray.length; q++) {
      if (bigIndexes.includes(q)) {
        order.push(true);
      } else {
        order.push(false);
      }
    }
    // <-- We are adding " " value to our array because javascript not seeing " " as a value automaticcaly. -->
    for (let r = 0; r < shiftedMessageArray.length; r++) {
      if (shiftedMessageArray[r] === undefined) {
        shiftedMessageArray.splice(r, r, " ");
      }
    }
    //<-- We determine our result array here. -->
    for (let t = 0; t < messageArray.length; t++) {
      if (messageArray[t] === " ") {
        resultArray.push(" ");
      } else if (order[t]) {
        // console.log("push from bigString");
        resultArray.push(bigString[shiftedIndexArray[t]]);
      } else if (!order[t]) {
        resultArray.push(smallString[shiftedIndexArray[t]]);
        // console.log("push from smallString");
      }
    }
    // <-- Dealing with non letters -->
    for (let y = 0; y < messageArray.length; y++) {
      if (resultArray[y] === undefined) {
        resultArray[y] = messageArray[y];
      } else if (
        !bigString.includes(messageArray[y]) &&
        !smallString.includes(messageArray[y])
      ) {
      }
    }
    // <-- Still dealing with non letters -->
    for (let zz = 0; zz < shiftedIndexArray.length; zz++) {
      if (!typeof shiftedIndexArray[zz] === "string") {
        resultArray[zz] = messageArray[zz];
      }
    }
    // <-- Dealing with same letters letters -->
    let replacementArray = [];
    let replacementIndex = [];
    for (let zzz = 0; zzz < shiftedIndexArray.length; zzz++) {
      let aaa = 0;
      let bbb = 0;
      aaa = aaa + zzz;
      bbb = bbb + zzz;
      let tempReplacement = shiftedIndexArray[zzz];
      let tempSameLetterMessage = messageArray[zzz];
      let tempSameLetterResult = shiftedIndexArray[zzz];
      let newTempResult;
      if (tempSameLetterMessage === tempSameLetterResult) {
        if (order[zzz] === true) {
          aaa = zzz;
        } else if (shiftedIndexArray[zzz] !== "number") {
          bbb = zzz;
          if (bbb + 13 >= 26) {
            replacementArray.push((bbb + 13) % shiftedIndexArray.length);
            replacementIndex.push(bbb);
          }
        }
      }
      for (let yeter = 0; yeter < replacementArray.length; yeter++) {
        let xd = replacementIndex[yeter];
        resultArray[xd] === shiftedIndexArray[xd];
      }
    }
    for (let lastTime = 0; lastTime < shiftedIndexArray.length; lastTime++) {
      if (typeof resultArray[lastTime === "string"]) {
        resultArray[lastTime] = messageArray[lastTime];
      }
    }
    for (
      let lastSecondTime = 0;
      lastSecondTime < order.length;
      lastSecondTime++
    ) {
      if (typeof shiftedIndexArray[lastSecondTime] === "number") {
        if (order[lastSecondTime] === false) {
          resultArray[lastSecondTime] =
            smallString[shiftedIndexArray[lastSecondTime]];
        } else {
          resultArray[lastSecondTime] =
            bigString[shiftedIndexArray[lastSecondTime]];
        }
      }
    }
    result = resultArray.join("");
    return result;
    //  <-- Logs used-->
    // console.log(typeof shiftedIndexArray[lastTime]);
    // console.log(smallString.length);
    // console.log("smallString-->", smallString);
    // console.log("bigString-->", bigString);
    // console.log("bigArray-->", bigArray);
    // console.log("smallArray-->", smallArray);
    // console.log("Length-->", messageArray.length);
    // console.log("messageArray-->", messageArray);
    // console.log("bigIndexes-->", bigIndexes);
    // console.log("smallIndexes-->", smallIndexes);
    // console.log("indexArr-->", indexArr);
    // console.log(order);
    // console.log("shiftedIndexArray-->", shiftedIndexArray);
    // console.log("resultArray", resultArray);
    // console.log("result-->", result);
    // console.log("replacementArray ", replacementArray);
    // console.log("replacementIndex ", replacementIndex);
  }
