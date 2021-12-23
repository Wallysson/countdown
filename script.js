const countdown = () => {
  const countDate = new Date('Dec 31, 2021 00:00:00').getTime() // Peguei data futura e .getTime() pra virar valor inteiro
  const currentTime = new Date().getTime() // Peguei data de agora
  const gap = countDate - currentTime //  Diferença entre data futura e data atual

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  // Calcular
  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const texMinute = Math.floor((gap % hour) / minute)
  const texSecond = Math.floor((gap % minute) / second)

  document.querySelector('.day').innerText = textDay
  document.querySelector('.hour').innerText = textHour
  document.querySelector('.minute').innerText = texMinute
  document.querySelector('.second').innerText = texSecond
}

setInterval(countdown, 1000)
