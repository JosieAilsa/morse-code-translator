"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MorseToEnglish = exports.EnglishToMorse = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Set up event listeners 

Morse code has spaces to indicate gaps between between letters and a slash for gaps between words. 

// Create a class with all the letters stored as their equivalant:

Create an object class with all the morse letters. Set to key value pairs
Give it the word as a parameter/phrase.
Break the word up into and array. For spaces add a / 
Create a new array and for each item in the array find someway of accessing the value of that value. 

// */
// const translateButton = document.querySelector("#button___translate");
// const refreshButton = document.querySelector("#button__refresh");
// const translation = document.querySelector("#translation__text");
// let userInput = document.querySelector("#input__text");
///function get transaltion from the object 
var getMorseTranslation = function getMorseTranslation(newEnglishObject, phrase) {
  newEnglishObject.addNewPhrase(phrase);
  newEnglishObject.breakDownPhrase();
  newEnglishObject.translateEnglishToMorse();
  newEnglishObject.getStringOutput();
  return newEnglishObject.output;
};

var getEnglishTranslation = function getEnglishTranslation(newMorseObject, phrase) {
  newMorseObject.addNewPhrase(phrase);
  newMorseObject.breakDownMorse();
  newMorseObject.translateMorseToEnglish();
  newMorseObject.getStringOutput();
  return newMorseObject.output;
};

var getOutput = function getOutput(newObject, outputBox) {
  return outputBox.innerHTML = "".concat(newObject.output);
}; // The class object with all the alphabet kets and their morse value 


var EnglishToMorse =
/*#__PURE__*/
function () {
  function EnglishToMorse() {
    _classCallCheck(this, EnglishToMorse);

    this.A = ".-", this.B = "-...", this.C = "-.-.", this.D = "-..", this.E = ".", this.F = "..-.", this.G = "--.", this.H = "....", this.I = "..", this.J = ".---", this.K = "-.-", this.L = ".-..", this.M = "--", this.N = "-.", this.O = "---", this.P = ".--.", this.Q = "--.-", this.R = ".-.", this.S = "...", this.T = "-", this.U = "..-", this.W = ".--", this.X = "-..-", this.Y = "-.--", this.Z = "--..";
    this.output = "", this.phraseArray = [], this.translation = "";
  } // Add a method to add a new phrase


  _createClass(EnglishToMorse, [{
    key: "addNewPhrase",
    value: function addNewPhrase(phrase) {
      return this.phrase = phrase;
    }
  }, {
    key: "breakDownPhrase",
    value: function breakDownPhrase() {
      var phraseArray = this.phrase.toUpperCase().split("");
      return this.phraseArray = phraseArray;
    }
  }, {
    key: "translateEnglishToMorse",
    value: function translateEnglishToMorse(phrase) {
      this.addNewPhrase(phrase);
      this.breakDownPhrase();
      this.getTranslation();
      this.getStringOutput();
    }
  }, {
    key: "getTranslation",
    value: function getTranslation() {
      var _this = this;

      var translation = this.phraseArray.map(function (element) {
        if (element === " ") {
          return "/";
        }

        return _this[element];
      });
      return this.translation = translation;
    }
  }, {
    key: "getStringOutput",
    value: function getStringOutput() {
      var engRegEx = new RegExp("[a-zA-z]");

      if (engRegEx.test(this.translation)) {
        return this.output = this.translation.join("");
      }

      return this.output = this.translation.join(" ");
    }
  }, {
    key: "clearPhrase",
    value: function clearPhrase() {
      this.phraseArray = [];
      this.translation = [];
      this.getStringOutput = "";
    }
  }]);

  return EnglishToMorse;
}();

exports.EnglishToMorse = EnglishToMorse;
; // // /Get input from the user a
//    translateButton.addEventListener("click", () => {
//       const userInputValue = document.querySelector("#input__text").value;
//       //If the value is in English 
//       const engRegEx = new RegExp ("[a-zA-z]")
//       if (engRegEx.test(userInputValue)) {
//       const englishToMorse = new EnglishToMorse
//       getMorseTranslation(englishToMorse, userInputValue);
//       return getOutput(englishToMorse, translation)
//       } 
//       //If the value is Morse
//       const morseToEnglish = new MorseToEnglish;
//       console.log(getEnglishTranslation(morseToEnglish,userInputValue));
//       return getOutput(morseToEnglish,translation);
//    })
// //Clear the input box
//     refreshButton.addEventListener("click", () => {
//       userInput.value = ""
//       translation.innerHTML = ""
//       // getEnglishTranslation.clearPhrase();
//       // getMorseTranslation.clearPhrase();
//    })

var MorseToEnglish =
/*#__PURE__*/
function (_EnglishToMorse) {
  _inherits(MorseToEnglish, _EnglishToMorse);

  function MorseToEnglish() {
    _classCallCheck(this, MorseToEnglish);

    return _possibleConstructorReturn(this, _getPrototypeOf(MorseToEnglish).call(this));
  }

  _createClass(MorseToEnglish, [{
    key: "breakDownMorse",
    value: function breakDownMorse() {
      var phraseArray = this.phrase.toUpperCase().split(" ");
      return this.phraseArray = phraseArray;
    }
  }, {
    key: "translateMorse",
    value: function translateMorse() {
      var _this2 = this;

      var translation = this.phraseArray.map(function (value) {
        if (value === "/") {
          return " ";
        }

        for (var key in _this2) {
          if (_this2[key] === value) {
            return key;
          }
        }
      });
      return this.translation = translation;
    }
  }, {
    key: "translateEnglishToMorse",
    value: function translateEnglishToMorse(phrase) {
      this.addNewPhrase(phrase);
      this.breakDownMorse();
      this.translateMorse();
      this.getStringOutput();
    }
  }]);

  return MorseToEnglish;
}(EnglishToMorse); // Test Eng to Morse


exports.MorseToEnglish = MorseToEnglish;
var englishToMorse = new EnglishToMorse();
englishToMorse.translateEnglishToMorse("hello"); // englishToMorse.addNewPhrase("hello");
// console.log(englishToMorse.breakDownPhrase());
// console.log(englishToMorse.translateEnglishToMorse());
// console.log(englishToMorse.getStringOutput())
/// Test Morse to Eng 

var morseToEnglish = new MorseToEnglish(); //    morseToEnglish.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
//    // console.log(morseToEnglish.breakDownMorse())
//    // console.log(morseToEnglish.translateMorseToEnglish())
//    // console.log(morseToEnglish.getStringOutput())
//   console.log(morseToEnglish.phrase)
//   console.log(morseToEnglish.translation)