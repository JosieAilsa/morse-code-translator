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
      return this.output = this.translation.join(" ");
   }
      
   clearPhrase() {
      this.phraseArray = []
      this.translation = []
      this.getStringOutput = ""
   }
   
};
///test object. 

///function get transaltion from the object 
const getTranslation = (newObject, phrase) => {
   newObject.addNewPhrase(phrase);
   newObject.breakDownPhrase();
   newObject.translateEnglishToMorse();
   newObject.getStringOutput();
   return newObject.output
}

const getOutput = (newObject, outputBox) => {
   return outputBox.innerHTML = `${newObject.output}`
}

// ///Get input from the user 
//    translateButton.addEventListener("click", () => {
//       const translation = document.querySelector("#translation");
//       const userInputValue = document.querySelector("#input").value;
//       const englishToMorse = new EnglishToMorse
//       getTranslation(englishToMorse, userInputValue);
//       return getOutput(englishToMorse, translation)

//    })
// //Clear the input box
//     refreshButton.addEventListener("click", () => {
//       translation.innerHTML = " "
//    })

// const englishToMorse  = new EnglishToMorse; 
// englishToMorse.addNewPhrase("hello my man");
// console.log(englishToMorse.breakDownPhrase());
// console.log(englishToMorse.translateEnglishToMorse());
// console.log(englishToMorse.getStringOutput())

class MorseToEnglish extends EnglishToMorse {
   constructor(){
      super()
   }

   breakDownMorse(){
      const phraseArray = this.phrase.toUpperCase().split(" ")
      return this.phraseArray = phraseArray;
   }

   translateMorseToEnglish() {
      let morsetoEnglishArray = this.phraseArray.map((value) => {
         if (value === "/") {
            return " "
            } 
         for (let key in this ) {
            if (this[key]=== value) {
               return key;
            }
            }
         });
         return morsetoEnglishArray.join("");
   }
}
const morseToEnglish = new MorseToEnglish;

morseToEnglish.addNewPhrase(".... . .-.. .-.. --- / -- -.-- / -- .- -.")
console.log(morseToEnglish.breakDownMorse())
console.log(morseToEnglish.translateMorseToEnglish())