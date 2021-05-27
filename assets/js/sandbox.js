"use strict";
function makeCounter() {
  let count = 0; //замкнутая переменная инкапсулированая
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
  };
}

const counter1 = makeCounter();
const counter2 = makeCounter();

/*
Напишите функцию create Adder(n),
которая вернет другую функцию.Возвращаемая функция должна складывать получаемый аргумент m
с агргументом n возвращаемой функции.
const adder(10)=20
adder(50)=70
adder(100)=170
*/

const createAdder = (n) => (m) => n = n + m;;


const adder = createAdder(100);
