
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let rnd = parseInt(Math.random() * 26);
let secretletter = alphabet[rnd];
let numGuesses = 5;

let userguess = prompt('I m thinking of a letter. Can you guess it ? You have ' + numGuesses).substring(0, 1).toUpperCase();

if (secretletter == userguess) {
    alert('Congratulatons You Got It!');
}
else {
    if (secretletter < userguess) {
        alert("The secret letter is before " + userguess);
    }
    else {
        alert("The secret letter is after " + userguess);
    }
    numGuesses--
    userguess = prompt('Try again you have ' + numGuesses + ' guesses left').substring(0, 1).toUpperCase();
    if (secretletter == userguess) {
        alert('Congratulatons You Got It!');
    }
    else {
        if (secretletter < userguess) {
            alert("The secret letter is before " + userguess);
        }
        else {
            alert("The secret letter is after " + userguess);
        }
        numGuesses--
        userguess = prompt('Try again you have ' + numGuesses + ' guesses left').substring(0, 1).toUpperCase();
        if (secretletter == userguess) {
            alert('Congratulatons You Got It!');
        }
        else {
            if (secretletter < userguess) {
                alert("The secret letter is before " + userguess);
            }
            else {
                alert("The secret letter is after " + userguess);
            }
            numGuesses--
            userguess = prompt('Try again you have ' + numGuesses + ' guesses left').substring(0, 1).toUpperCase();
            if (secretletter == userguess) {
                alert('Congratulatons You Got It!');
            }
            else {
                if (secretletter < userguess) {
                    alert("The secret letter is before " + userguess);
                }
                else {
                    alert("The secret letter is after " + userguess);
                }
                numGuesses--
                userguess = prompt('Try again you have ' + numGuesses + ' guesses left').substring(0, 1).toUpperCase();
                if (secretletter == userguess) {
                    alert('Congratulatons You Got It!');
                }
                else {
                    alert("You are out of guesses " + secretletter);
                }

            }
        }
    }
}
