// Code your solutions in this file

function writeCards (namesArray, eventName) {
    let thankYouCards = []
    for (let i = 0; i < namesArray.length; i++) {
     thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouCards
}

function countDown(positiveInt) { 
    let num = 0
    while(num <= positiveInt ) { 
        console.log(positiveInt--)
    }
}
