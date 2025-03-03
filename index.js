/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const convert = document.getElementById("convert-btn")

convert.addEventListener("click", function(){
  lengthFunction()
  volumeFunction()
  massFunction()

})

function lengthFunction(){
  let input = document.getElementById("input").value.trim()
  let length = document.getElementById("resultLength")
  let foot = 3.281

  let numericInput = parseFloat(input) || 0

  let meters = numericInput * foot

  let feet = numericInput / foot

  if (numericInput == 1){
    length.textContent = `${numericInput} meter = ${meters.toFixed(3)} feet || ${numericInput} feet = ${feet.toFixed(3)} meter`

        } else

    length.textContent = `${numericInput} meters = ${meters.toFixed(3)} feet || ${numericInput} feet = ${feet.toFixed(3)} meters`

}

function volumeFunction(){
  let input = document.getElementById("input").value.trim()
  let volume = document.getElementById("resultVolume")
  let gallon = .264

  let numericInput = parseFloat(input) || 0

  let liter = numericInput * gallon

  let gallons = numericInput / gallon

  if (numericInput == 1){
      volume.textContent = `${numericInput} liter = ${liter.toFixed(3)} gallons || ${numericInput} gallon = ${gallons.toFixed(3)} liters`
      } else
        volume.textContent = `${numericInput} liters = ${liter.toFixed(3)} gallons || ${numericInput} gallons = ${gallons.toFixed(3)} liters`
}

function massFunction(){
  let input = document.getElementById("input").value.trim()
  let mass = document.getElementById("resultMass")
  let pound = 2.204

  let numericInput = parseFloat(input) || 0

  let kilograms = numericInput * pound

  let pounds = numericInput / pound
  if (numericInput == 1){
    mass.textContent = `${numericInput} kilogram = ${kilograms.toFixed(3)} pounds || ${numericInput} pounds = ${pounds.toFixed(3)} kilogram`
    } else
  mass.textContent = `${numericInput} kilograms = ${kilograms.toFixed(3)} pounds || ${numericInput} pounds = ${pounds.toFixed(3)} kilograms`
}