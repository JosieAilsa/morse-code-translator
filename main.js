/*
Set up event listeners 

Morse code has spaces to indicate gaps between between letters and a slash for gaps between words. 

// Create a class with all the letters stored as their equivalant:

Create an object class with all the morse letters. Set to key value pairs
Give it the word as a parameter/phrase.
Break the word up into and array. For spaces add a / 
Create a new array and for each item in the array find someway of accessing the value of that value. 

*/ 
// const userInput = document.querySelector("input");
// const translateButton = document.querySelector("#translateButton");
// const refreshButton = document.querySelector("#refreshButton");
// const translation = document.querySelector("#translation");


 
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
   this.output = ""
   this.phraseArray = ""

   }
   addNewPhrase (phrase) {
      return this.phrase = phrase;
   }
   get breakDownPhrase(){
      const phraseArray = this.phrase.toUpperCase().split("")
      return this.phraseArray = phraseArray;
   }

   get translatePhrase() {
    const translation = this.phraseArray.map((element) => {
      if (element === " ") {
         return "/"
      }
         return this[element]
    })
    return this.translation = translation;
   }

   get stringOutput(){
      return this.translation.join(" ");

   }

   clearPhrase() {
      this.phraseArray = ""
   }
};

const newPhrase = new EnglishToMorse

console.log(newPhrase.addNewPhrase(("What am I doing")))
console.log(newPhrase.breakDownPhrase)
console.log(newPhrase.translatePhrase)
console.log(newPhrase.stringOutput)


