//variables timer display
let minutesDisplay = document.querySelector('.minutesDisplay')
let secondsDisplay = document.querySelector('.secondsDisplay') 
let timer = null

//variables controls display
let buttonPlay = document.querySelector('.buttonPlay')
let buttonStop = document.querySelector('.buttonStop')
let buttonIncrement5 = document.querySelector('.buttonIncrement5')
let buttonIncrement5AfterPlay = document.querySelector('.buttonIncrement5AfterPlay')
let buttonDecrement5 = document.querySelector('.buttonDecrement5')
let buttonDecrement5AfterPlay = document.querySelector('.buttonDecrement5AfterPlay')

//variables audio cards display
let forestCard = document.querySelector('.forestCard')
let rainCard = document.querySelector('.rainCard')
let coffeeCard = document.querySelector('.coffeeCard')
let fireplaceCard = document.querySelector('.fireplaceCard')

const timerDisplay = {
  minutesDisplay,
  secondsDisplay,
  timer
}

const buttonsControls = {
  buttonPlay,
  buttonStop,
  buttonIncrement5,
  buttonIncrement5AfterPlay,
  buttonDecrement5,
  buttonDecrement5AfterPlay
}

const cards = {
  forestCard,
  rainCard,
  coffeeCard,
  fireplaceCard
}

import clockEvents from "./clock-events.js"
const timerEvents = clockEvents({
  minutesDisplay,
  secondsDisplay
})


export{
  timerDisplay,
  buttonsControls,
  cards,
  timerEvents
}

