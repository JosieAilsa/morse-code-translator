"use strict";

var _types = require("@babel/types");

var _main = require("./main");

describe("English to Morse", function () {
  var translator;
  beforeEach(function () {
    translator = new _main.EnglishToMorse();
  });
  test("Should add `hello` to the phrase key within the object", function () {
    //Arrange 
    translator.addNewPhrase("hello"); // Assert

    expect(translator.phrase).toBe("hello");
  });
  test("Should break up `hello` into array of uppercase letters", function () {
    //Arrange
    //Act
    translator.addNewPhrase("hello");
    translator.breakDownPhrase(); // Assert

    expect(translator.phraseArray).toMatchObject(['H', 'E', 'L', 'L', 'O']);
  });
  test("Should access the key matching the letter from within the object, returning the morse values", function () {
    //Arrange
    //Act
    translator.addNewPhrase("hello");
    translator.breakDownPhrase();
    translator.getTranslation(); // Assert

    expect(translator.translation).toMatchObject(['....', '.', '.-..', '.-..', '---']);
  });
  test("Should join the array together into a string an return it", function () {
    //Arrange
    //Act
    translator.addNewPhrase("hello");
    translator.breakDownPhrase();
    translator.getTranslation(); // Assert

    expect(translator.output).toBe(".... . .-.. .-.. ---");
  });
  test("Integrated function should return translation", function () {
    //Arrange
    //Act
    translator.translateMorseToEnglish("hello");
    expect(translator.output).toBe(".... . .-.. .-.. ---");
  });
});
describe("Morse to English", function () {
  var translator;
  beforeEach(function () {
    translator = new _main.MorseToEnglish();
  }); // helloWorldTranslation.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
  // helloWorldTranslation.breakDownMorse();
  // helloWorldTranslation.translateMorseToEnglish();
  // helloWorldTranslation.getStringOutput();

  test("Should add `hello world` to the phrase in the object", function () {
    //Arrange 
    translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."); // Assert

    expect(translator.phrase).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
  });
  test("Should break up `hello world` into an array based on spaces between letters", function () {
    translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    translator.breakDownPhrase();
    translator.translateMorse();
    expect(translator.phraseArray).toMatchObject(['....', '.', '.-..', '.-..', '---', '/', '.--', '---', '.-.', '.-..', '-..']);
  });
  test("Should translate each letter in the morse array ", function () {
    //Arrange 
    translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
    translator.breakDownPhrase();
    translator.translateMorse(); //Assert 

    expect(translator.translation).toMatchObject(['H', 'E', 'L', 'L', 'O', ' ', 'W', 'O', 'R', 'L', 'D']);
  });
  test("Integrated function should return translation", function () {
    //Arrange
    translator.translateEnglishToMorse(".... . .-.. .-.. --- / .-- --- .-. .-.. -.."); //Assert 

    expect(helloWorldTranslation.output).toBe("HELLO WORLD");
  });
});