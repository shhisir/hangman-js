const words = [
    "apple", "banana", "grape", "orange", "lemon",
    "peach", "cherry", "mango", "melon", "kiwi",
    "plum", "berry", "papaya", "guava", "apricot",
    "pear", "lime", "coconut", "fig", "date",
    "avocado", "carrot", "broccoli", "cabbage", "potato",
    "tomato", "onion", "garlic", "ginger", "beet",
    "spinach", "pumpkin",  "zucchini", "corn", "pea",
    "lettuce", "radish", "turnip", "yam", "celery",
    "cucumber", "pepper", "chili", "olive", "basil",
    "thyme", "mint", "sage", "dill", "rosemary"
  ];

   const wordToGuess = words[Math.floor(Math.random() * words.length)]
   let lives = 6
   let guessedLetter = []


function displayWord(){
    let word = ""
    for (let letter of wordToGuess){
        if(guessedLetter.includes(letter)){
            word += letter + ""
        } else {
             word += "_"
        }
    }
    console.log(word.trim())
}

function guessLetter(letter){
    letter = letter.toLowerCase()
    if (guessedLetter.includes(letter)){
        console.log("you already guesssed that letter")
        return 
    }

    if (wordToGuess.includes(letter)){
        guessedLetter.push(letter);
        console.log("correct guess")
    } else {
        lives -- ;
        console.log("wrong guess")
        }
}


function checkWord(){
    for (let letter of  wordToGuess){
        if (!guessedLetter.includes(letter)){
            return false
        }
    }
    return true

}

while (lives > 0  && !checkWord()){
    displayWord() 

    let userInput = prompt("guess a letter")
    if (userInput){
        guessLetter(userInput[0].toLowerCase())
    }
}




if (checkWord()){
    console.log(`you winn The word was "${wordToGuess}"`)
} else{
    console.log(`you lose the word was "${wordToGuess}`)
}