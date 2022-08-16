// let color1 = document.getElementById("color1")
// let color2 = document.getElementById("color2")
// let body = document.querySelector("body")

// function changeGradient(){
// body.style.background= `linear-gradient(to right , ${color1.value},${color2.value}`
// }

// color1.addEventListener('change',changeGradient)
// color2.addEventListener('change',changeGradient)

let color = document.querySelector('#color')
let color1 = document.querySelector('#color1')
let color2 = document.querySelector('#color2')
let color3 = document.querySelector('#color3')
let solid = document.querySelector('.solid')
let solid1 = document.querySelector('.solid1')
let linear = document.querySelector('.linear')
let text = document.querySelector('#text')
let value = document.querySelector("#value")
let value1 = document.querySelector("#value1")
let value2 = document.querySelector("#value2")
let value3 = document.querySelector("#value3")

value.innerHTML = color.value
value1.innerHTML = color1.value
value2.innerHTML = color2.value
value3.innerHTML = color3.value

function changecolor(){
    solid.style.background = color.value
    solid1.style.background = color1.value
    linear.style.background = `linear-gradient(to right , ${color2.value},${color3.value}`
    value.innerHTML = color.value
    value1.innerHTML = color1.value
    value2.innerHTML = color2.value
    value3.innerHTML = color3.value
}

color.addEventListener('change',changecolor)
color1.addEventListener('change',changecolor)
color2.addEventListener('change',changecolor)
color3.addEventListener('change',changecolor)
