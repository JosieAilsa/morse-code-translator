/*
Set up event listeners 

Morse code has spaces to indicate gaps between between letters and a slash for gaps between words. 

// Create a class with all the letters stored as their equivalant:

Create an object class with all the morse letters. Set to key value pairs
Give it the word as a parameter/phrase.
Break the word up into and array. For spaces add a / 
Create a new array and for each item in the array find someway of accessing the value of that value. 

// */ 
// const translateButton = document.querySelector("#translateButton");
// const refreshButton = document.querySelector("#refreshButton");


///function get transaltion from the object 
const getMorseTranslation = (newEnglishObject, phrase) => {
   newEnglishObject.addNewPhrase(phrase);
   newEnglishObject.breakDownPhrase();
   newEnglishObject.translateEnglishToMorse();
   newEnglishObject.getStringOutput();
   return newEnglishObject.output
}

const getEnglishTranslation = (newMorseObject, phrase) => {
   newMorseObject.addNewPhrase(phrase);
   newMorseObject.breakDownMorse();
   newMorseObject.translateMorseToEnglish();
   newMorseObject.getStringOutput();
   return newMorseObject.output
}

const getOutput = (newObject, outputBox) => {
   return outputBox.innerHTML = `${newObject.output}`
}

// The class object with all the alphabet kets and their morse value 
class EnglishToMorse{
   constructor(){
   this.A = ".-",
   this.B = "-...",
   this.C = "-.-.",
   this.D = "-..",
   this.E = ".",
   this.F = "..-.",
   this.G = "--.",
   this.H = "....",
   this.I = "..",
   this.J = ".---",
   this.K = "-.-",
   this.L = ".-..",
   this.M = "--",
   this.N = "-.",
   this.O = "---",
   this.P = ".--.",
   this.Q = "--.-",
   this.R = ".-.",
   this.S = "...",
   this.T = "-",
   this.U = "..-",
   this.W = ".--",
   this.X = "-..-",
   this.Y = "-.--",
   this.Z = "--.."
   this.output = "",
   this.phraseArray = [],
   this.translation = ""
   }
   // Add a method to add a new phrase
   addNewPhrase(phrase) {
      return this.phrase = phrase;
   }

   breakDownPhrase(){
      const phraseArray = this.phrase.toUpperCase().split("")
      return this.phraseArray = phraseArray;
   }

   translateEnglishToMorse() {
    const translation = this.phraseArray.map((element) => {
      if (element === " ") {
         return "/"
      }
         return this[element]
    })
    return this.translation = translation;
   }

   getStringOutput() {
      const engRegEx = new RegExp ("[a-zA-z]")
      if (engRegEx.test(this.translation)) {
         return this.output = this.translation.join("")
      }
      return this.output = this.translation.join(" ");
   }
      
   clearPhrase() {
      this.phraseArray = []
      this.translation = []
      this.getStringOutput = ""
   }
   
};

// /Get input from the user a
   translateButton.addEventListener("click", () => {
      const translation = document.querySelector("#translation");
      const userInputValue = document.querySelector("#input").value;
      //If the value is in English 
      const engRegEx = new RegExp ("[a-zA-z]")
      if (engRegEx.test(userInputValue)) {
      const englishToMorse = new EnglishToMorse
      getMorseTranslation(englishToMorse, userInputValue);
      return getOutput(englishToMorse, translation)
      } 
      const morseToEnglish = new MorseToEnglish;
      console.log(getEnglishTranslation(morseToEnglish,userInputValue));
      return getOutput(morseToEnglish,translation);
   })

   const getUserInput = (inputValue) => {
      inputValue

   }
//Clear the input box
    refreshButton.addEventListener("click", () => {
      translation.innerHTML = ""
   })


class MorseToEnglish extends EnglishToMorse {
   constructor(){
      super()
   }

   breakDownMorse(){
      const phraseArray = this.phrase.toUpperCase().split(" ")
      return this.phraseArray = phraseArray;
   }

   translateMorseToEnglish() {
      let translation = this.phraseArray.map((value) => {
         if (value === "/") {
            return " "
            } 
         for (let key in this ) {
            if (this[key]=== value) {
               return key;
            }
            }
         });
         return this.translation = translation;
      }
   }

// Test Eng to Morse

   const englishToMorse  = new EnglishToMorse; 
   englishToMorse.addNewPhrase("hello");
   console.log(englishToMorse.breakDownPhrase());
   console.log(englishToMorse.translateEnglishToMorse());
   console.log(englishToMorse.getStringOutput())

/// Test Morse to Eng 

   const morseToEnglish = new MorseToEnglish;

   morseToEnglish.addNewPhrase(".... . .-.. .-.. ---")
   console.log(morseToEnglish.breakDownMorse())
   console.log(morseToEnglish.translateMorseToEnglish())
   console.log(morseToEnglish.getStringOutput())



