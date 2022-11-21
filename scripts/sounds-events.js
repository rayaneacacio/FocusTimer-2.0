export default function audios(){
  const forestAudio = new Audio('./audios/Floresta.wav')
  const rainAudio = new Audio('./audios/Chuva.wav')
  const coffeeAudio = new Audio('./audios/Cafeteria.wav')
  const fireplaceAudio = new Audio('./audios/Lareira.wav')

  return{
    forestAudio,
    rainAudio,
    coffeeAudio,
    fireplaceAudio
  }
}