function randomQuoteFunction()
{
    var quotesArray =  [
                            "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
                            "So many books, so little time.",
                            "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
                            "You only live once, but if you do it right, once is enough.",
                            "Friendship ... is born at the moment when one man says to another What! You too? I thought that no one but myself . . .",
                            "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
                            "Always forgive your enemies; nothing annoys them so much.",
                            "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
                            "It is better to be hated for what you are than to be loved for what you are not.",
                            "Live as if you were to die tomorrow. Learn as if you were to live forever."
                        ];
    var authorsArray = [
                            "Marilyn Monroe",
                            "Frank Zappa",
                            "Bernard M. Baruch",
                            "Mae West",
                            "C.S. Lewis, The Four Loves",
                            "Maya Angelou",
                            "Oscar Wilde",
                            "Ralph Waldo Emerson",
                            " Andre Gide, Autumn Leaves",
                            "Mahatma Gandhi"
                        ];
    var randomQuote =Math.floor(Math.random() * quotesArray.length);
    var output =document.getElementById('quote');
    var author =document.getElementById('author');
    output.innerHTML="“ " + quotesArray[randomQuote] + " ”";
    author.innerHTML=" - "+authorsArray[randomQuote]+" - ";
}

