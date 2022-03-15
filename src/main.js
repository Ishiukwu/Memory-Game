const cards = [
    {
        name :'fries',
        img :'src/Images/fries.png'
    },
    {
        name : 'cheeseburger',
        img :'src/Images/Cheeseburger.png'
    },
    {
        name : 'ice-cream',
        img :'src/Images/ice-cream.png'
    },
    {
        name : 'pizza',
        img :'src/Images/pizza.png'
    },
    {
        name : 'milkshake',
        img : 'src/Images/milkshake.png'
    },
    {
        name : 'Hotdog',
        img : 'src/Images/Hotdog.png'
    },
    {
        name :'fries',
        img :'src/Images/fries.png'
    },
    {
        name : 'cheeseburger',
        img :'src/Images/Cheeseburger.png'
    },
    {
        name : 'ice-cream',
        img :'src/Images/ice-cream.png'
    },
    {
        name : 'pizza',
        img :'src/Images/pizza.png'
    },
    {
        name : 'milkshake',
        img : 'src/Images/milkshake.png'
    },
    {
        name : 'Hotdog',
        img : 'src/Images/Hotdog.png'
    },
   
]


cards.sort(() => 0.5 - Math.random())
console.log(cards)


const grid = document.querySelector('.grid')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []
let resultDisplay = document.querySelector('#result')

function createBoard() {
    for(i = 0; i < cards.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'src/Images/Blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}



function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosenIds)
    this.setAttribute('src', cards[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

function checkMatch() {
    const kards = document.querySelectorAll('img')
    const optionOne = cardsChosenIds[0]
    const optionTwo =  cardsChosenIds[1]

    if(optionOne === optionTwo){
        alert('You clicked the same card, dummy!')
        kards[optionOne].setAttribute('src', 'src/Images/Blank.png')
        kards[optionTwo].setAttribute('src', 'src/Images/Blank.png')
    }else if (cardsChosen[0] === cardsChosen[1]){
        alert('You have found a match!')
        kards[optionOne].setAttribute('src', 'src/Images/white.png')
        kards[optionTwo].setAttribute('src', 'src/Images/white.png')
        kards[optionOne].removeEventListener('click', flipCard)
        kards[optionTwo].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        
    }else{
        alert('You lose, loser!')
        kards[optionOne].setAttribute('src', 'src/Images/Blank.png')
        kards[optionTwo].setAttribute('src', 'src/Images/Blank.png')
    }

    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.innerHTML = cardsWon.length
    
    if(cardsWon.length === cards.length / 2){
        resultDisplay.innerHTML = 'Nice one. You too much, Baba'
    }
}



createBoard()
