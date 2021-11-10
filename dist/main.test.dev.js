"use strict";

var _types = require("@babel/types");

var _main = require("./main");

describe("English to Morse", function () {
  var helloTranslation = new _main.EnglishToMorse();
  helloTranslation.addNewPhrase("hello");
  helloTranslation.breakDownPhrase();
  helloTranslation.translateEnglishToMorse();
  helloTranslation.getStringOutput();
  test("Should add `hello` to the phrase key within the object", function () {
    expect(helloTranslation.phrase).toBe("hello");
  });
  test("Should break up `hello` into array of uppercase letters", function () {
    expect(helloTranslation.phraseArray).toMatchObject(['H', 'E', 'L', 'L', 'O']);
  });
  test("Should access the key matching the letter from within the object, returning the morse values", function () {
    expect(helloTranslation.translation).toMatchObject(['....', '.', '.-..', '.-..', '---']);
  });
  test("Should join the array together into a string an return it", function () {
    expect(helloTranslation.output).toBe(".... . .-.. .-.. ---");
  });
});
describe("Morse to English", function () {
  var helloWorldTranslation = new _main.MorseToEnglish();
  helloWorldTranslation.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  helloWorldTranslation.breakDownMorse();
  helloWorldTranslation.translateMorseToEnglish();
  helloWorldTranslation.getStringOutput();
  test("Should add `hello world` to the phrase in the object", function () {
    expect(helloWorldTranslation.phrase).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
  test("Should break up `hello world` into an array based on spaces between letters", function () {
    expect(helloWorldTranslation.phraseArray).toMatchObject(['....', '.', '.-..', '.-..', '---', '/', '.--', '---', '.-.', '.-..', '-..']);
  });
  test("Should translate each letter in the morse array ", function () {
    expect(helloWorldTranslation.translation).toMatchObject(['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D']);
  });
  test("Should return a string of english", function () {
    expect(helloWorldTranslation.output).toBe("HELLO WORLD");
  });
});