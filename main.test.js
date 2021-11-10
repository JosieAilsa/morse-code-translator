import { exportAllDeclaration } from "@babel/types";
import { EnglishToMorse, MorseToEnglish } from "./main";

describe("English to Morse", () => {
    let translator;

    beforeEach (() => {
        translator = new EnglishToMorse();
    })

    test("Should add `hello` to the phrase key within the object", () => {
        //Arrange 
        translator.addNewPhrase("hello");
         // Assert
        expect(translator.phrase).toBe("hello");
    })
    test("Should break up `hello` into array of uppercase letters", () => {
        //Arrange
        //Act
        translator.addNewPhrase("hello");
        translator.breakDownPhrase();
        // Assert
        expect(translator.phraseArray).toMatchObject([ 'H', 'E', 'L', 'L', 'O' ])
    })
    test("Should access the key matching the letter from within the object, returning the morse values", () => {
         //Arrange
        //Act
        translator.addNewPhrase("hello");
        translator.breakDownPhrase();
        translator.getTranslation();
        // Assert
        expect(translator.translation).toMatchObject([ '....', '.', '.-..', '.-..', '---' ])
    })
    test("Should join the array together into a string an return it", () => {
         //Arrange
        //Act
        translator.addNewPhrase("hello");
        translator.breakDownPhrase();
        translator.getTranslation();
        translator.getStringOutput();
        // Assert
        expect(translator.output).toBe(".... . .-.. .-.. ---")
    })
    test("Integrated function should return translation", () => {
        //Arrange
        //Act
        translator.translateEnglishToMorse("hello");
        //Assert
        expect(translator.output).toBe(".... . .-.. .-.. ---")
    })
})

describe("Morse to English", () => {
    let translator; 
    beforeEach (() => {
    translator = new MorseToEnglish; 
    });
    // helloWorldTranslation.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    // helloWorldTranslation.breakDownMorse();
    // helloWorldTranslation.translateMorseToEnglish();
    // helloWorldTranslation.getStringOutput();
    test("Should add `hello world` to the phrase in the object", () => {
        //Arrange 
        translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        // Assert
        expect(translator.phrase).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        })

    test("Should break up `hello world` into an array based on spaces between letters", () => {
        translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        translator.breakDownMorse();
        expect(translator.phraseArray).toMatchObject(
            [ '....', '.',   '.-..',
            '.-..', '---', '/',
            '.--',  '---', '.-.',
            '.-..', '-..']
        )
    })
    test("Should translate each letter in the morse array ", () => {
        //Arrange 
        translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        translator.breakDownMorse();
        translator.translateMorse()
        //Assert 
        expect(translator.translation).toMatchObject(
            ['H', 'E', 'L', 'L',
            'O', ' ', 'W', 'O',
            'R', 'L', 'D']
        )
    })
    test("Should translate return string in English ", () => {
        //Arrange 
        translator.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        translator.breakDownMorse();
        translator.translateMorse();
        translator.getStringOutput()
        //Assert 
        expect(translator.output).toBe("HELLO WORLD");
    })
    test("Integrated function should return translation", () => {
        //Arrange
        translator.translateEnglishToMorse(".... . .-.. .-.. --- / .-- --- .-. .-.. -..");
        //Assert 
        expect(translator.output).toBe("HELLO WORLD")
    })

});

