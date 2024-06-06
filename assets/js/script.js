const horas = document.getElementById('horas') // pega o elemento pelo id no CSS
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const relogio = setInterval(function time () { // função que é executada para determinado tempo
    let dateToday = new Date()
    let hr = dateToday.getHours () //elemento que usa a horas
    let min = dateToday.getMinutes () // elemento que usa os minutos
    let sec = dateToday.getSeconds () // elemento que usa os segundos

    if (hr < 10) hr = '0' + hr //Se a hora for menor que 10 irá ser adicionado um 0

    if (min < 10) hr = '0' + min //Se o minuto for menor que 10 irá ser adicionado um 0

    if (sec < 10) hr = '0' + sec //Se o segundo for menor que 10 irá ser adicionado um 0

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

}) 