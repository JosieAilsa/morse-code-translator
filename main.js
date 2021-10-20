/*
Set up event listeners 

Morse code has spaces to indicate gaps between between letters and a slash for gaps between words. 

// Create a class with all the letters stored as their equivalant:

Create an object class with all the morse letters. Set to key value pairs
Give it the word as a parameter/phrase.
Break the word up into and array. For spaces add a / 
Create a new array and for each item in the array find someway of accessing the value of that value. 

*/ 
const translateButton = document.querySelector("#translateButton");
const refreshButton = document.querySelector("#refreshButton");


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

   translate() {
    const translation = this.phraseArray.map((element) => {
      if (element === " ") {
         return "/"
      }
         return this[element]
    })
    return this.translation = translation;
   }

   stringOutput() {
      return this.output = this.translation.join(" ");
   }
      
   clearPhrase() {
      this.phraseArray = []
      this.translation = []
      this.stringOutput = ""
   }
   
};
///test object. 

///function get transaltion from the object 
const getTranslation = (newObject, phrase) => {
   newObject.addNewPhrase(phrase);
   newObject.breakDownPhrase();
   newObject.translate();
   newObject.stringOutput();
   return newObject.output
}

const getOutput = (newObject, outputBox) => {
   return outputBox.innerHTML = `${newObject.output}`
}

///Get input from the user 
   translateButton.addEventListener("click", () => {
      const translation = document.querySelector("#translation");
      const userInputValue = document.querySelector("#input").value;
      const englishToMorse = new EnglishToMorse
      getTranslation(englishToMorse, userInputValue);
      return getOutput(englishToMorse, translation)

   })
//Clear the input box
    refreshButton.addEventListener("click", () => {
      translation.innerHTML = " "
   })

class morseToEnglish extends EnglishToMorse {

}

