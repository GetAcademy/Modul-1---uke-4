function updateGuessedWord(correctWord, letter, guessedWord) {
    letter = letter.toUpperCase();
    guessedWord = guessedWord || ''.padEnd(correctWord.length, '?');
    const index = correctWord.indexOf(letter);
    if (index == -1) return guessedWord;
    /*
        01234
        TERJE
        ???J?
        R
    */
    return guessedWord.substring(0, index)
         + letter
         + guessedWord.substring(index + 1);
    }