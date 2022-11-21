import {buttonsControls, cards, timerEvents} from './variables.js'
import audioCardsEvents from './audiocards-events.js'
const soundFromCards = audioCardsEvents()

//controls buttons
buttonsControls.buttonPlay.addEventListener('click', function(){
  buttonsControls.buttonPlay.classList.add('eventClick')
  timerEvents.timerPlay()
  buttonsControls.buttonIncrement5.classList.add('hide')
  buttonsControls.buttonIncrement5AfterPlay.classList.remove('hide')
  buttonsControls.buttonDecrement5.classList.add('hide')
  buttonsControls.buttonDecrement5AfterPlay.classList.remove('hide')
})

buttonsControls.buttonStop.addEventListener('click', function(){
  buttonsControls.buttonPlay.classList.remove('eventClick')
  timerEvents.timerStop()
  buttonsControls.buttonIncrement5.classList.remove('hide')
  buttonsControls.buttonIncrement5AfterPlay.classList.add('hide')
  buttonsControls.buttonDecrement5.classList.remove('hide')
  buttonsControls.buttonDecrement5AfterPlay.classList.add('hide')
})

buttonsControls.buttonIncrement5.addEventListener('click', function(){
  buttonsControls.buttonPlay.classList.remove('eventClick')
  timerEvents.increment()
})

buttonsControls.buttonIncrement5AfterPlay.addEventListener('click', function(){
  buttonsControls.buttonPlay.classList.remove('eventClick')
  timerEvents.increment()
  timerEvents.timerPlay()
})

buttonsControls.buttonDecrement5.addEventListener('click', function(){
  buttonsControls.buttonPlay.classList.remove('eventClick')
  timerEvents.decrement()
})

buttonsControls.buttonDecrement5AfterPlay.addEventListener('click', function(){
  buttonsControls.buttonPlay.classList.remove('eventClick')
  timerEvents.decrement()
  timerEvents.timerPlay()
})

//audio cards buttons
cards.forestCard.addEventListener('click', function(){
  soundFromCards.forestEvent()
})

cards.rainCard.addEventListener('click', function(){
  soundFromCards.rainEvent()
})

cards.coffeeCard.addEventListener('click', function(){
  soundFromCards.coffeeEvent()
})

cards.fireplaceCard.addEventListener('click', function(){
  soundFromCards.fireplaceEvent()
})