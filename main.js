/*
Set up event listeners 

Morse code has spaces to indicate gaps between between letters and a slash for gaps between words. 

// Create a class with all the letters stored as their equivalant:

Create an object class with all the morse letters. Set to key value pairs
Give it the word as a parameter/phrase.
Break the word up into and array. For spaces add a / 
Create a new array and for each item in the array find someway of accessing the value of that value. 

*/ 
const translateButton = document.querySelector("#button___translate");
const refreshButton = document.querySelector("#button__refresh");
const translation = document.querySelector("#translation__text");
const outputBox = document.querySelector("#translation__text")
let userInput = document.querySelector("#input__text");

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

   translateEnglishToMorse(phrase) {
   this.addNewPhrase(phrase);
   this.breakDownPhrase();
   this.getTranslation();
   this.getStringOutput();
   }

   getTranslation() { 
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

class MorseToEnglish extends EnglishToMorse {
   constructor(){
      super()
   }

   breakDownMorse(){
      const phraseArray = this.phrase.toUpperCase().split(" ")
      return this.phraseArray = phraseArray;
   }

   translateMorse() {
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
   
   translateMorsetoEnglish(phrase){
      this.addNewPhrase(phrase);
      this.breakDownMorse();
      this.translateMorse();
      this.getStringOutput();
      }
   
}
   

// // Test Eng to Morse

//  const englishToMorse  = new EnglishToMorse; 

//  englishToMorse.translateEnglishToMorse("hello")
//    // englishToMorse.addNewPhrase("hello");
//    // console.log(englishToMsorse.breakDownPhrase());
//    // console.log(englishToMorse.translateEnglishToMorse());
//    // console.log(englishToMorse.getStringOutput())

// /// Test Morse to Eng 

//    const morseToEnglish = new MorseToEnglish;

// //    morseToEnglish.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
// //    // console.log(morseToEnglish.breakDownMorse())
// //    // console.log(morseToEnglish.translateMorseToEnglish())
// //    // console.log(morseToEnglish.getStringOutput())

// //   console.log(morseToEnglish.phrase)
// //   console.log(morseToEnglish.translation)



// /Get input from the user a
translateButton.addEventListener("click", () => {
   const userInputValue = document.querySelector("#input__text").value;
   //If the value is in English 
   const engRegEx = new RegExp ("[a-zA-z]")
   if (engRegEx.test(userInputValue)) {
   let englishToMorse = new EnglishToMorse();
   englishToMorse.translateEnglishToMorse(userInputValue);
   return outputBox.innerHTML = `${englishToMorse.output}`
   } 
   //If the value is Morse
   let morseToEnglish = new MorseToEnglish();
   morseToEnglish.translateMorsetoEnglish(userInputValue)
   return outputBox.innerHTML = `${morseToEnglish.output}`
})

//Clear the input box
    refreshButton.addEventListener("click", () => {
      userInput.value = ""
      translation.innerHTML = ""
   });