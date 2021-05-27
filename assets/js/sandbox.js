"use strict";
function makeCounter() {
  let count = 0; //замкнутая переменная инкапсулированая
  return {
    increment() {
      return ++count;
    },
  };
}

const counter = makeCounter();
