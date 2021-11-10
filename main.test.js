import { exportAllDeclaration } from "@babel/types";
import { EnglishToMorse, MorseToEnglish } from "./main";

describe("English to Morse", () => {
    const helloTranslation = new EnglishToMorse;
    helloTranslation.addNewPhrase("hello");
    helloTranslation.breakDownPhrase();
    helloTranslation.translateEnglishToMorse();
    helloTranslation.getStringOutput();
    test("Should add `hello` to the phrase key within the object", () => {
        expect(helloTranslation.phrase).toBe("hello");
    })
    test("Should break up `hello` into array of uppercase letters", () => {
        expect(helloTranslation.phraseArray).toMatchObject([ 'H', 'E', 'L', 'L', 'O' ])
    })
    test("Should access the key matching the letter from within the object, returning the morse values", () => {
        expect(helloTranslation.translation).toMatchObject([ '....', '.', '.-..', '.-..', '---' ])
    })
    test("Should join the array together into a string an return it", () => {
        expect(helloTranslation.output).toBe(".... . .-.. .-.. ---")
    })
})

describe("Morse to English", () => {
    const helloWorldTranslation = new MorseToEnglish; 
    helloWorldTranslation.addNewPhrase(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    helloWorldTranslation.breakDownMorse();
    helloWorldTranslation.translateMorseToEnglish();
    helloWorldTranslation.getStringOutput();
    test("Should add `hello world` to the phrase in the object", () => {
        expect(helloWorldTranslation.phrase).toBe(".... . .-.. .-.. --- / .-- --- .-. .-.. -..")
    })
    test("Should break up `hello world` into an array based on spaces between letters", () => {
        expect(helloWorldTranslation.phraseArray).toMatchObject(
            [ '....', '.',   '.-..',
            '.-..', '---', '/',
            '.--',  '---', '.-.',
            '.-..', '-..']
        )
    })
    test("Should translate each letter in the morse array ", () => {
        expect(helloWorldTranslation.translation).toMatchObject(
            ['H', 'E', 'L', 'L',
            'O', ' ', 'W', 'O',
            'R', 'L', 'D']
        )
    })
    test("Should return a string of english", () => {
        expect(helloWorldTranslation.output).toBe("HELLO WORLD")
    })

})

