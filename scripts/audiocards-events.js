import {cards} from './variables.js'
import audios from './sounds-events.js'
const audio = audios()

export default function audioCardsEvents(){

  let soundForest = false
  let soundRain = false
  let soundCoffee = false
  let soundFireplace = false

  function forestEvent(){
    soundRain = false
    soundCoffee = false
    soundFireplace = false

    audio.rainAudio.pause()
    audio.coffeeAudio.pause()
    audio.fireplaceAudio.pause()

    cards.rainCard.classList.remove('cardSoundOn')
    cards.coffeeCard.classList.remove('cardSoundOn')
    cards.fireplaceCard.classList.remove('cardSoundOn')

    soundForest = !soundForest
    
    if(soundForest){
      audio.forestAudio.play()
      cards.forestCard.classList.add('cardSoundOn')
    } else{
      audio.forestAudio.pause()
      cards.forestCard.classList.remove('cardSoundOn')
    }
  }

  function rainEvent(){
    soundForest = false
    soundCoffee = false
    soundFireplace = false

    audio.forestAudio.pause()
    audio.coffeeAudio.pause()
    audio.fireplaceAudio.pause()

    cards.forestCard.classList.remove('cardSoundOn')
    cards.coffeeCard.classList.remove('cardSoundOn')
    cards.fireplaceCard.classList.remove('cardSoundOn')

    soundRain = !soundRain

    if(soundRain){
      audio.rainAudio.play()
      cards.rainCard.classList.add('cardSoundOn')
    } else{
      audio.rainAudio.pause()
      cards.rainCard.classList.remove('cardSoundOn')
    }
  }

  function coffeeEvent(){
    soundForest = false
    soundRain = false
    soundFireplace = false

    audio.forestAudio.pause()
    audio.rainAudio.pause()
    audio.fireplaceAudio.pause()

    cards.forestCard.classList.remove('cardSoundOn')
    cards.rainCard.classList.remove('cardSoundOn')
    cards.fireplaceCard.classList.remove('cardSoundOn')
    
    soundCoffee = !soundCoffee

    if(soundCoffee){
      audio.coffeeAudio.play()
      cards.coffeeCard.classList.add('cardSoundOn')
    } else{
      audio.coffeeAudio.pause()
      cards.coffeeCard.classList.remove('cardSoundOn')
    }
  }

  function fireplaceEvent(){
    soundForest = false
    soundRain = false
    soundCoffee = false

    audio.forestAudio.pause()
    audio.rainAudio.pause()
    audio.coffeeAudio.pause()

    cards.forestCard.classList.remove('cardSoundOn')
    cards.rainCard.classList.remove('cardSoundOn')
    cards.coffeeCard.classList.remove('cardSoundOn')

    soundFireplace = !soundFireplace

    if(soundFireplace){
      audio.fireplaceAudio.play()
      cards.fireplaceCard.classList.add('cardSoundOn')
    } else{
      audio.fireplaceAudio.pause()
      cards.fireplaceCard.classList.remove('cardSoundOn')
    }
  }

  return{
    forestEvent,
    rainEvent,
    coffeeEvent,
    fireplaceEvent
  }
}