export default function clockEvents({
  minutesDisplay,
  secondsDisplay
}){

  let timer = null

  function timerPlay(){

    let minutes = minutesDisplay.textContent
    let seconds = secondsDisplay.textContent
  
    timer = setTimeout(function(){
      if(seconds==0){
        seconds = 60
        minutes--
      }
  
      minutesDisplay.textContent = String(minutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds-1).padStart(2, '0')
  
      timerPlay()
    }, 1000)
  }

  function timerStop(){
    clearTimeout(timer)
  }
  
  function increment(){
    clearTimeout(timer)
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
  }
  
  function decrement(){
    clearTimeout(timer)
    if (Number(minutesDisplay.textContent)>0){
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
    }
  }

  return{
    timerPlay,
    timerStop,
    increment,
    decrement
  }
}